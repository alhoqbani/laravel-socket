<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">General Chat Room</div>

                    <div class="panel-body">
                        I'm a chat room!
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
        mounted() {
            console.log('Chat room mounted.')
        }
    }
</script>
