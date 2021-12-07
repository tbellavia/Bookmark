Vue.component('goal', {
    props: ['goal'],
    template:
        '<div class="goal-item bookmark-section bookmark-section-background">\n' +
                '<h3 class="goal-item-label">{{ goal.title }}</h3>\n' +
                '<h3 class="goal-item-value">{{ goal.value }}</h3>\n' +
        '</div>'
});

Vue.component('bookmark', {
    props: ['page'],
    template: '' +
        '<div class="bookmark-item">\n' +
        '   <h4>Page</h4>\n' +
        '   <h3>{{ page }}</h3>\n' +
        '</div>'
})

const app = new Vue({
    el: '#app-core',
    data: {
        goals: {
            daily: {
                title: "Daily goal",
                value: 0
            },
            total: {
                title: "Total",
                value: 0
            }
        },
        bookmarks: [],
        begin: 0,
        end: 1,
        duration: 7
    },
    methods: {
        calculateBookmarks: function() {
            if ( this.begin === this.end ){
                window.alert("Begin cannot be equal to end");
            }
            else if ( this.begin > this.end ){
                window.alert("End cannot be less than begin");
            }
            else {
                const total = this.end - this.begin;
                const daily = Math.floor( total / this.duration );
                let index = 0;

                if ( daily === 0 ){
                    window.alert("Total cannot be 0");
                } else {
                    this.bookmarks = [];
                    for ( let page = this.begin + daily ; page <= this.end ; page += daily ){
                        this.bookmarks.push({
                            id: index++,
                            page: page
                        });
                    }
                    this.goals.daily.value = daily;
                    this.goals.total.value = total;
                }
            }
        }
    }
});