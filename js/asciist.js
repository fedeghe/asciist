(function() {

    var config = {
        children: [
            {component: 'Header', ref: 'h', data: {xxx: 1}},
            {
                component: 'tt',
                params: {}
            }
        ],
        onClick: function() {
            var n = this.getNode('h')
            n.data.xxx++
            n.render()
        },
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