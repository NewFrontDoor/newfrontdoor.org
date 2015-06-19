import path from 'path';

function dirPath() {
  let params = ['./'];
  params.push.apply(params, arguments);
  return path.join.apply(path, params);
}

function src(p) {
  return dirPath('/src/', p || '');
}

function dest(p) {
  return dirPath('/dest/', p || '');
}

function modules(p) {
  return dirPath('/node_modules/', p || '');
}

export default {
  dest: dest(),
  bootstrap: {
    style: modules('/bootstrap-sass/assets/stylesheets')
  },
  style: {
    src: src('css/main.scss'),
    dest: dest(),
    watch: [
      src('/css/**/*.scss')
    ],
    imports: [
      dirPath('node_modules')
    ]
  },
  scripts: {
    src: src('js/**/*.js'),
    dest: dest(),
    bundle: src('js')
  },
  templates: {
    src: [
      src('/templates/**/*.hbs')
    ],
    dest: dest()
  },
  extras: {
    src: src('/stuff/*'),
    dest: dest()
  },
  fonts: {
    src: [
      src('/fonts/*.{eot,svg,ttf,woff,otf}')
    ],
    dest: dest('/assets/fonts')
  },
  html: {
    src: src('/**/*.html'),
    dest: dest(),
    watch: [
      src('**/*.html'),
      './index.html'
    ]
  },
  html2js: {
    src: src('/**/*.html'),
    dest: src('/js/')
  },
  mock: {
    vf: {
      src: ['./mock-vf/index.js', './mock-vf/mock-data/**/*.mock.js'],
      dest: './mock-vf/mock-build'
    }
  }
};
