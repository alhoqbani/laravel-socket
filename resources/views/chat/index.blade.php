@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Chat</div>

                <div class="panel-body">
                    Welcome To Laravel Chat
                </div>
            </div>
        </div>
    </div>
</div>
<chat-room></chat-room>
@endsection
