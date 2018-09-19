class Forkme {
    constructor(url, position = 'left', depth = '1000', hover = true) {
        this.url = `https:///github.com/${url}`
        this.position = position
        this.depth = depth
        this.hover = hover
        this.primary()
    }

    primary() {
        const RibonId = `forkme--${Math.random().toString(36).slice(-8)}`
        document.body.insertAdjacentHTML('beforeend', `<a class="${RibonId}" href="${this.url}" target="_blank" rel="noopener">Fork me on GitHub</a>`)
        const Ribbon = document.querySelector(`.${RibonId}`)
        let Rotation
        let RightPosition
        if (this.position === 'left') {
            RightPosition = 'auto'
            Rotation = 'rotate(-45deg) translate(-120px, -70px)'
        } else {
            RightPosition = '0'
            Rotation = 'rotate(45deg) translate(120px, -70px)'
        }

        Ribbon.insertAdjacentHTML('beforeBegin', `<style>.${RibonId}{position:fixed;top:0;display:flex;align-items:center;justify-content:center;width:400px;height:60px;background:#121621;color:#fff;text-decoration:none;font-size:12px;box-shadow:inset 0 0 10px 5px #121621;transition:all .5s;}</style>`)

        Object.assign(Ribbon.style, {
            right: RightPosition,
            zIndex: this.depth,
            transform: Rotation
        })

        if (this.hover) {
            Ribbon.addEventListener('mouseover', (event) => {
                const This = event.currentTarget
                This.style.color = 'rgba(255, 255, 255, .75)'
            }, { passive: true })
            Ribbon.addEventListener('mouseout', (event) => {
                const This = event.currentTarget
                This.style.color = '#fff'
            }, { passive: true })
        }
    }
}

export default Forkme
