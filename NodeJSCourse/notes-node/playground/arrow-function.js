var square = (x) => x * x;
console.log(square(9));

var user = {
  name: 'Andrew',
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  }
}

user.sayHi();
user.sayHiAlt(1,2,3);

// USE () {} SYNTAX IN OBJECT METHOD DEFINITONS INSTEAD OF ARROW FUNCTIONS, IT PROVIDES (THIS)->OBJECT FUNCTIONALITY
// AS WELL AS ARGUMENTS KEYWORD
//Output of sayHiAlt:
//{ '0': 1, '1': 2, '2': 3 }
// Hi. I'm Andrew
//
//
//Output of sayHi:
// { '0': {},
//   '1':
//    { [Function: require]
//      resolve: [Function: resolve],
//      main:
//       Module {
//         id: '.',
//         exports: {},
//         parent: null,
//         filename: 'C:\\Users\\Jeremy\\Desktop\\WebDev\\Udemy\\NodeJSCourse\\note
// s-node\\playground\\arrow-function.js',
//         loaded: false,
//         children: [],
//         paths: [Object] },
//      extensions: { '.js': [Function], '.json': [Function], '.node': [Function] }
// ,
//      cache: { 'C:\Users\Jeremy\Desktop\WebDev\Udemy\NodeJSCourse\notes-node\play
// ground\arrow-function.js': [Object] } },
//   '2':
//    Module {
//      id: '.',
//      exports: {},
//      parent: null,
//      filename: 'C:\\Users\\Jeremy\\Desktop\\WebDev\\Udemy\\NodeJSCourse\\notes-n
// ode\\playground\\arrow-function.js',
//      loaded: false,
//      children: [],
//      paths:
//       [ 'C:\\Users\\Jeremy\\Desktop\\WebDev\\Udemy\\NodeJSCourse\\notes-node\\pl
// ayground\\node_modules',
//         'C:\\Users\\Jeremy\\Desktop\\WebDev\\Udemy\\NodeJSCourse\\notes-node\\no
// de_modules',
//         'C:\\Users\\Jeremy\\Desktop\\WebDev\\Udemy\\NodeJSCourse\\node_modules',
//
//         'C:\\Users\\Jeremy\\Desktop\\WebDev\\Udemy\\node_modules',
//         'C:\\Users\\Jeremy\\Desktop\\WebDev\\node_modules',
//         'C:\\Users\\Jeremy\\Desktop\\node_modules',
//         'C:\\Users\\Jeremy\\node_modules',
//         'C:\\Users\\node_modules',
//         'C:\\node_modules' ] },
//   '3': 'C:\\Users\\Jeremy\\Desktop\\WebDev\\Udemy\\NodeJSCourse\\notes-node\\pla
// yground\\arrow-function.js',
//   '4': 'C:\\Users\\Jeremy\\Desktop\\WebDev\\Udemy\\NodeJSCourse\\notes-node\\pla
// yground' }
// Hi. I'm undefined
