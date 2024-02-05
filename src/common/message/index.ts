import {createVNode, render} from "vue";
import Message from "@/common/message/Message.vue";

let count = 0;
const topSpace = 54;


export default ({message, type}) => {
    count++;
    const messageNode = document.createElement("div");
    messageNode.setAttribute("id", `message_${count}`);
    messageNode.setAttribute("class", `message message-${type}`)
    messageNode.style.top = `${topSpace * count}px`;
    document.body.appendChild(messageNode);

    const vnode = createVNode(Message, {str: 11, type})
    render(vnode, messageNode);


    ((count) => {
        setTimeout(() => {
            render(null, messageNode);


            setTimeout(() => {
                console.log(count, messageNode);
                (document.getElementById(`message_${count}`) as HTMLDivElement).remove();
            }, 3000)
        }, 5000);
    })(count);

}
