import type { App } from 'vue'
import Blog from '../components/UI/BlogItem.vue'
import Input from '../components/UI/InputSearch.vue'
import Chips from '../components/UI/ChipsItem.vue'
import Modal from "@/components/other/Modal.vue"
import Comment from "@/components/UI/CommentItem.vue"
import Button from "@/components/UI/ButtonItem.vue"

export default ({ app }: { app: App }) => {
    app.component('blog-ui', Blog)
    app.component('input-ui', Input)
    app.component('chips-ui', Chips)
    app.component('modal-ui', Modal)
    app.component('comment-ui', Comment)
    app.component('button-ui', Button)
}