Vue.component('comp', {
    template: '<span>{{ todo.id }} {{ todo.text }}</span>',
    props: ['todo']
});


// DATA MUST BE A FUNCTION SO THAT WE CAN KEEP SEPERATE INSTANCES OF THE DATA IF THE COMPONENTS ARE REUSED
Vue.component('btn-counter', {
    data: function () { // !!! IMPORTANT !!!
        return {
            count: 0
        }
    },
    template: '<button @click="count++" >I\'ve been clicked {{ count }} times</button>'
});

Vue.component('blog-header', {
    props: ['title'],
    template: '<h5>The Blog\'s title is {{ title }}</h5>'
});

// USE COMPONENT PROPERTIES HERE, AND PASS IN POST.TITLE IN THE HTML. IDIOT
Vue.component('blog-post', {
    props: ['post'],
    template: "<div><h3>{{ post.title }}</h3>" +
    "<button v-on:click=\"$emit('enlarge', 0.1)\">Enlarge</button>" +
    "<p>{{ post.body }}</p></div>"
});

// COMPONENT
Vue.component('custom-input', {
    props: ['value'],
    template: '<input :value="value" @input="$emit(\'input\', $event.target.value)"> '
});

Vue.component('alert-box', {
    template: '<div><strong>!!!</strong><slot>Boo</slot></div>'
})


const blog = new Vue({
    el: '#blog-post',
    data: {
        customInput: '',
        posts: [
            {
                id: 0,
                title: 'Blog Post one',
                body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci autem cupiditate deserunt distinctio eaque eveniet facilis illo, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci autem cupiditate deserunt distinctio eaque eveniet facilis illo'
            },
            {
                id: 1,
                title: 'Blog Post two',
                body: 'inventore minus, nemo non obcaecati odio quos repellat soluta sunt unde voluptatibus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci autem cupiditate deserunt distinctio eaque eveniet facilis illo'
            },
            {
                id: 2,
                title: 'Blog Post three',
                body: 'inventore minus, nemo non obcaecati odio quos repellat soluta sunt unde voluptatibus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci autem cupiditate deserunt distinctio eaque eveniet facilis illo'
            }
        ],
        postFontSize: 1
    }
});

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// var app = new Vue({
//     el: '#app',
//     data: {
//         message: 'Hello Vue',
//         title: "The time is " + new Date().toLocaleString(),
//         seen: true,
//         X: [1, 2, 3, 10],
//         list: [
//             {id: 0, text: "boo"}
//         ],
//         firstName: "",
//         lastName: "",
//         style: {
//             color: 'cornflowerblue',
//             fontStyle: 'bold'
//         },
//         ok: 'true',
//         count: 0,
//         checked: false,
//         checkedNames: [],
//         radio: '',
//         select: '',
//         selected: [],
//         selectedDynamic: '',
//         options: [
//             {text: 'One', value: 'One'},
//             {text: 'Two', value: 'Two'},
//             {text: 'Three', value: 'Three'}
//         ],
//         checkV: '',
//         radioV: '',
//         radioVopt: {
//             true: "You're in!!!!",
//             false: "Nope, you're out"
//         },
//         textInputLazy: '',
//         numberInput: '',
//         textInputTrim: ''
//     },
//     computed: {
//         reverse: function () {
//             return this.message.split("").reverse().join('');
//         },
//         fullName: {
//             // getter
//             get: function () {
//                 return this.firstName + ' ' + this.lastName
//             },
//             // setter
//             set: function (newValue) {
//                 var names = newValue.split(' ');
//                 this.firstName = names[0];
//                 this.lastName = names[names.length - 1]
//             }
//         }
//     },
//     methods: {
//         rev: function () {
//             this.message = this.message.split("").reverse().join("");
//             this.ok = !this.ok;
//         },
//         warn: function (mes, event) {
//             console.log(event);
//         }
//     },
//     watch: {
//         message: function (newM, oldM) {
//             console.log(newM);
//         }
//     }
// });


