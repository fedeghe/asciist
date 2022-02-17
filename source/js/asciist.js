(function() {
    var config = {
            children: [{
                tag: 'h2',
                html: 'Just a component'
            }, {
                component: 'tt',
                params: {}
            }],
            cb: function() {
                hokuto.channel.get('xxx').sub('hello', console.log)
                this.lateWid('xyzy')
                this.done();
            },
            engy: {componentsUrl: 'js/components/'}
        };

    window.onload = function() {
        config.target = document.body

        hokuto.renderWithComponents(config, true, 'xxx').then(console.log)
    };
})();