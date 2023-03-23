import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as pactum from 'pactum';
import { PrismaService } from '../src/prisma/prisma.service';
import { AppModule } from '../src/app.module';
import { AuthDto, SignupDto } from 'src/auth/dto';
import { EditUserDto } from 'src/user/dto';

describe('App e2e', () => {
  let app: INestApplication;
  let prisma: PrismaService;
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

    app.init();
    app.listen(3030);

    prisma = app.get(PrismaService);
    await prisma.cleanDb();

    pactum.request.setBaseUrl('http://localhost:3030');
  });
  afterAll(() => {
    app.close();
  });

  describe('Auth', () => {
    describe('Signup', () => {
      const dto: SignupDto = {
        username: 'test',
        email: 'test@test.com',
        password: 'testing123',
      };
      // Testing serveral test cases is the best way
      it('should throw an exception if any input is missing/empty', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody({
            username: dto.username,
            email: undefined,
            password: dto.password,
          })
          .expectStatus(400);
      });
      it('should signup', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody(dto)
          .expectStatus(201);
        //  .inspect();
      });
    });
    describe('Login', () => {
      const dto: AuthDto = {
        email: 'test@test.com',
        password: 'testing123',
      };

      it('should throw an exception if password is empty', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody(dto.email)
          .expectStatus(400);
      });

      it('should throw an exception if email is empty', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody(dto.password)
          .expectStatus(400);
      });

      it('should login', () => {
        return pactum
          .spec()
          .post('/auth/login')
          .withBody(dto)
          .expectStatus(200)
          .stores('userAt', 'access_token');
        //  .inspect();
      });
    });
  });

  describe('User', () => {
    describe('Get me', () => {
      it('should Get user currently logged in', () => {
        return pactum
          .spec()
          .get('/users/me')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .expectStatus(200);
        //  .inspect();
      });
    });

    describe('Edit me', () => {
      const dto: EditUserDto = {
        name: 'Chukwuma',
        email: 'test@test.com',
      };
      it('should edit a current user', () => {
        return pactum
          .spec()
          .patch('/users')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .withBody(dto)
          .expectStatus(200)
          .inspect();
      });
    });
  });

  describe('Bookmark', () => {
    describe('Create bookmark', () => {});
    describe('Get bookmarks', () => {});

    describe('Get bookmark by Id', () => {});

    describe('Edit bookmar', () => {});

    describe('Delete bookmark', () => {});
  });
});
