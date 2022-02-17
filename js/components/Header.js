var h = {
    tag: 'h4',
    html: `asciist`,
    cb: function () {
        console.log(this.data.xxx)
        this.node.innerHTML = this.data.xxx
        this.done()
    }
}