export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR = "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e" ;

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY , 
    },
  };

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_large.jpg";


export const SUPPORTED_LANGUAGES = [
  {
    identifier: "en" , name: "English"
  },
  {
    identifier: "hindi" , name: "Hindi"
  },
  {
    identifier: "kannada" , name: "Kannada"
  },
];


// export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY ;
export const GROQ_KEY = process.env.REACT_APP_GROQ_API_KEY;

export const FIREBASE_KEY = process.env.REACT_APP_FIREBASE_KEY; 


