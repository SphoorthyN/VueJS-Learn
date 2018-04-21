// COMPONENTS
Vue.component('blog-tab', {
    props: ['blog'],
    template: '<div class="blog-tab Inactive-Box">\n' +
    '    <button class="blog-tab-button" v-on:click="$emit(\'set-title\')">\n' +
    '        <div class="title">{{ blog.title }}</div>\n' +
    '        <div class="author">By {{ blog.author }}</div>\n' +
    '    </button>\n' +
    '</div>'
});

// Vue.component("blog-body", {
//     props: ['blog'],
//     template: ''
// })
var lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus eligendi ex excepturi id nihil officiis repellendus soluta voluptas. Nobis quisquam sint tenetur veritatis. Aspernatur dolor maxime omnis provident rem! Officiis!\n' +
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, debitis, numquam. Animi commodi cupiditate laborum nesciunt quod similique tempora! Accusantium animi atque culpa dolorem dolorum eligendi odit perferendis provident voluptatum.\n' +
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et facere labore maiores molestiae necessitatibus quibusdam quidem sit velit. Alias, animi assumenda deleniti deserunt dolorem fuga inventore iusto repellat sunt vero!\n' +
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam, distinctio eaque earum eligendi et expedita hic inventore iusto, minus mollitia numquam perferendis quis quod sapiente vel voluptatum. Aliquam, modi?\n' +
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut consequuntur, dolor dolorum in labore maxime molestiae, nam, nesciunt officia perferendis sed suscipit tempora totam vitae. Eligendi fugiat magnam quaerat.\n' +
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab autem error non quisquam sit! Atque corporis distinctio iste labore minima officia quis similique tenetur! Alias consectetur enim explicabo neque?\n' +
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem distinctio in modi voluptates? Accusamus ad aperiam architecto deserunt earum eveniet fuga, harum, laborum nulla quidem quo, reiciendis sunt tempora unde.\n' +
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium alias animi assumenda consequuntur ex in incidunt iusto, maxime obcaecati, praesentium, provident quam qui soluta sunt suscipit voluptas? Fugiat, hic.\n' +
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aperiam culpa cupiditate doloremque enim exercitationem explicabo facere fugit laboriosam nihil omnis perspiciatis provident quibusdam quos sequi sunt temporibus tenetur ullam!\n' +
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus amet aspernatur assumenda consequatur corporis expedita fugit illo labore laboriosam necessitatibus nemo, nulla praesentium provident quo ratione tempora temporibus voluptatem.'

var blog = new Vue({
    el: '#blog',
    data: {
        blogs: [
            {title: 'Blog One', author: 'Sphoorthy', id: 0, text: lorem + '\n' + lorem},
            {title: 'Blog On', author: 'Sphoorthy', id: 1, text: lorem + '\n' + lorem},
            {title: 'Blog Oe', author: 'Sphoorthy', id: 2, text: lorem + '\n' + lorem},
            {title: 'Blog ne', author: 'Sphoorthy', id: 3, text: lorem + '\n' + lorem},
            {title: 'BlogOne', author: 'Sphoorthy', id: 4, text: lorem + '\n' + lorem},
            {title: 'Blo One', author: 'Sphoorthy', id: 5, text: lorem + '\n' + lorem},
            {title: 'Blg One', author: 'Sphoorthy', id: 6, text: lorem + '\n' + lorem},
            {title: 'BogOne', author: 'Sphoorthy', id: 7, text: lorem + '\n' + lorem},
            {title: 'Bog One', author: 'Sphoorthy', id: 8, text: lorem + '\n' + lorem},
            {title: 'Bg One', author: 'Sphoorthy', id: 9, text: lorem + '\n' + lorem},
            {title: 'B One', author: 'Sphoorthy', id: 10, text: 'gtgbeggeg1'}
        ],
        selected: {title: 'Blog One', author: 'Sphoorthy', id: 0, text: lorem + '\n' + lorem}
    },
    methods: {
        setTitle: function (id) {
            this.selected = this.blogs[id];
            console.log(id);
        }
    }

});
