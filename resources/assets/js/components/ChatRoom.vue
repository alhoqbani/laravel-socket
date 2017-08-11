<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2 chat-window">
                <div class="panel panel-default">
                    <div class="panel-heading">General Chat Room</div>

                    <div class="panel-body">
                        I'm a chat room!
                        <ul class="list-unstyled">
                            <li v-for="message in messages" v-text="message"></li>
                        </ul>
                    </div>
                    <div class="panel-footer">
                        <div class="input-group">
                            <input class="form-control" @keyup.enter="sendMessage" v-model="message"
                                   placeholder="Send a message...">
                            <span class="input-group-btn">
                            <button class="btn btn-success" @click.prevent="sendMessage">Send!</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import * as io from 'socket.io-client';

    let socket = io('http://localhost:3000');

    export default {
        name: 'chat-room',
        props: [],
        components: {},
        data() {
            return {
                message: '',
                messages: [],
            }
        },
        methods: {
            sendMessage() {
                socket.emit('message', {data: this.message});
                this.message = '';
            }
        },
        mounted() {
            socket.on('message', (message) => {
                this.messages.push(message.data);
            })
        }
    }
</script>

<style lang="scss">
    .chat-window {
        .panel {
            margin-bottom: 0;
            height: 70vh;
            max-height: 100vh;
            position: relative;
        }

        .panel-body {
            overflow-y: auto;
            position: absolute;
            top: 30px;
            bottom: 30px;
            left: 0;
            right: 0;
        }

        .panel-footer {
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
        }
    }

</style>
