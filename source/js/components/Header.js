var h = {
    tag: 'h4',
    html: `$PACKAGE.name$`,
    cb: function () {
        console.log(this.data.xxx)
        this.node.innerHTML = this.data.xxx
        this.done()
    }
}