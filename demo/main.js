import app from 'trim/app';
import translations from 'trim/lang/english';
import routes from './routes';
import services from './services';
import DummyComponent from './dummy';
// import auth from './auth';
import 'apiServer';

import './scss/main.scss';

app
    .setBootData({
        // usePatchForUpdate: false,
        // apiPagination: {
        //     strategy: 'offsetBased',
        //     offsetKey: 'offset',
        //     limitKey: 'limit'
        // }
        // resourceToApiMap: {
        //     article: 'article'
        //     user: 'user'
        // }
        validationErrorField: 'detail',
        itemsPerPage: process.env.NODE_ENV !== 'production' ? 15 : 10,
        usesPushState: process.env.NODE_ENV !== 'production',
        googleMapsApiKey: 'AIzaSyBVqg9EqOqARXVIaKRSC7pJpVeHKDRoU2I',
        baseUrl: process.env.BASE_URL,
        baseApiUrl: process.env.BASE_API_URL
    })
    .loadTranslations(translations, 'en')
    .registerServices(services)
    .registerRoutes(routes)
    .beforeAdminEnter(() => {})
    .appendAppComponent(DummyComponent)
    // .useAuth(auth)
    .start();
