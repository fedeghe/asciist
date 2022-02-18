(function() {

    var config = {
        children: [
            {
                component: 'Header',
                ref: 'h',
                state: {xxx: 1},
                data: {d: 1},
                onClick: function() {
                    // this.dox()
                    var n = this.getNode('h')
                    console.log(n)
                    console.log(this.getNode('xyzy'))
                    console.log(this.getNodes())
                    this.data.d++;
                    n.state.xxx++
                    n.render()
                }
            },
            {
                component: 'tt',
                params: {}
            }
        ],
        
        cb: function() {
            hokuto.channel.get('xxx').sub('hello', console.log)

            this.lateWid('xyzy')
            this.done();
        },
        engy: {componentsUrl: 'js/components/'}
    };

    
    config.target = document.body
    hokuto.renderWithComponents(config, true, 'xxx').then(console.log)
})();