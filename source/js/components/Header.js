var h = {
    tag: 'h4',
    html: `$PACKAGE.name$`,
    cb: function () {
        console.log(this.state.xxx)
        this.node.innerHTML = this.state.xxx
        this.done()
    }
}