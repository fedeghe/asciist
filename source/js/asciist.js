(function() {

    var config = {
        children: [
            {
                component: 'Header',
                ref: 'h',
                state: {xxx: 1},
                onClick: function() {
                    var n = this.getNode('h')
                    console.log(n)
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