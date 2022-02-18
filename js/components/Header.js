var h = {
    tag: 'h4',
    html: `asciist`,
    cb: function () {
        console.log(this.state.xxx)
        this.node.innerHTML = this.state.xxx
        this.done()
    }
}