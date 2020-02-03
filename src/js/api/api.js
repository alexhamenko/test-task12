import getResourse from './getResourse';
import createRowWithData from '../renderers/renderRowWithData';

getResourse('https://semalt.tech/dev/api/v1/example/test/')
    .then(data => createRowWithData(data.result.sitemap))
    .catch(err => console.error(err));
    


