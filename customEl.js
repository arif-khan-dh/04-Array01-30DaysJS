const template = document.createElement('template')
template.innerHTML = `
    <style>
    code[class*="language-"],
    pre[class*="language-"] {
        color: black;
        background: none;
        text-shadow: 0 1px white;
        font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
        font-size: 1em;
        text-align: left;
        white-space: pre;
        word-spacing: normal;
        word-break: normal;
        word-wrap: normal;
        line-height: 1.5;
    
        -moz-tab-size: 4;
        -o-tab-size: 4;
        tab-size: 4;
    
        -webkit-hyphens: none;
        -moz-hyphens: none;
        -ms-hyphens: none;
        hyphens: none;
    }
    
    pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
    code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {
        text-shadow: none;
        background: #b3d4fc;
    }
    
    pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
    code[class*="language-"]::selection, code[class*="language-"] ::selection {
        text-shadow: none;
        background: #b3d4fc;
    }
    
    @media print {
        code[class*="language-"],
        pre[class*="language-"] {
            text-shadow: none;
        }
    }
    
    /* Code blocks */
    pre[class*="language-"] {
        padding: 1em;
        margin: .5em 0;
        overflow: auto;
    }
    
    :not(pre) > code[class*="language-"],
    pre[class*="language-"] {
        background: #f5f2f0;
    }
    
    /* Inline code */
    :not(pre) > code[class*="language-"] {
        padding: .1em;
        border-radius: .3em;
        white-space: normal;
    }
    
    .token.comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
        color: slategray;
    }
    
    .token.punctuation {
        color: #999;
    }
    
    .token.namespace {
        opacity: .7;
    }
    
    .token.property,
    .token.tag,
    .token.boolean,
    .token.number,
    .token.constant,
    .token.symbol,
    .token.deleted {
        color: #905;
    }
    
    .token.selector,
    .token.attr-name,
    .token.string,
    .token.char,
    .token.builtin,
    .token.inserted {
        color: #690;
    }
    
    .token.operator,
    .token.entity,
    .token.url,
    .language-css .token.string,
    .style .token.string {
        color: #9a6e3a;
        /* This background color was intended by the author of this theme. */
        background: hsla(0, 0%, 100%, .5);
    }
    
    .token.atrule,
    .token.attr-value,
    .token.keyword {
        color: #07a;
    }
    
    .token.function,
    .token.class-name {
        color: #DD4A68;
    }
    
    .token.regex,
    .token.important,
    .token.variable {
        color: #e90;
    }
    
    .token.important,
    .token.bold {
        font-weight: bold;
    }
    .token.italic {
        font-style: italic;
    }
    
    .token.entity {
        cursor: help;
    }
    
    .topic{
        font-size: 1.1em;
        color: rgba(0,0,0,.5);
    }

    .ques-text {
        font-size: 1.3em;
        margin-top: .9rem;
        margin-bottom: .9rem;
    }

    .ques > :not(:first-child) {
        // margin-top: 1rem;
    }
    </style>
    <div class="ques">
        <div class="topic"></div>
        <div class="ques-text"></div>
        <div class="ans">
<pre>
<code class="language-javascript"></code>
</pre>
        </div>
    </div>
    <div class="result">
        <img src="" alt="" />
    </div>
`
// Element name: ques-el
class QuestionEL extends HTMLElement {

    static get observedAttributes() {
        return [ 'topic', 'ques-text', 'ans', 'result']
    }
    
    constructor() {
        super()        
        this.attachShadow( {mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    connectedCallback() {
        if(!this.hasAttribute('topic')) {
            this.setAttribute('topic', '')
        }
        if(!this.hasAttribute('ques-text')) {
            this.setAttribute('ques-text', '')
        }
        if(!this.hasAttribute('ans')) {
            this.setAttribute('ans', '')
        }
        if(!this.hasAttribute('result')) {
            this.setAttribute('result', '')
        }
    }

    attributeChangedCallback(name, oldval, newval) {
        switch (name) {
            case 'topic':
                this.shadowRoot.querySelector('.topic').
                    innerHTML = this.getAttribute('topic')                
                break;
            case 'ques-text':
                this.shadowRoot.querySelector('.ques-text').
                    innerHTML = this.getAttribute('ques-text')
                break;
            case 'ans':
                this.shadowRoot.querySelector('.ans pre code').
                    innerHTML = this.getAttribute('ans')
                break;
            case 'result':
                this.shadowRoot.querySelector('.result img').
                    src = this.getAttribute('result')
                this.shadowRoot.querySelector('.result img').
                    alt = 'result'
                break;
            default:
                break;
        }
    }

    set topic(value) {
        this.setAttribute('topic', value)
        
    }

    get topic() {
        this.getAttribute('topic')
    }

    set quesText(value) {
        this.setAttribute('ques-text', value)
        
    }

    get quesText() {
        this.getAttribute('ques-text')
    }

    set ans(value) {
        this.setAttribute('ans', value)
        
    }

    get ans() {
        this.getAttribute('ans')
    } 

    set result(value) {
        this.setAttribute('result', value)
        
    }

    get result() {
        this.getAttribute('result')
    }
}
customElements.define('ques-el', QuestionEL)