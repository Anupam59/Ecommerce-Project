@extends('Layout.app')

@section('content')

    <div class="container">
        <div class="row">
            <div class="col-md-3 p-2">
                <div class="card">
                    <div class="card-body">
                        <h4 class="count-card-title">{{$TotalAdmin}}</h4>
                        <h4 class="count-card-text">Total Admin</h4>
                    </div>
                </div>
            </div>

            <div class="col-md-3 p-2">
                <div class="card">
                    <div class="card-body">
                        <h4 class="count-card-title">{{$TotalProduct}}</h4>
                        <h4 class="count-card-text">Total Product</h4>
                    </div>
                </div>
            </div>

            <div class="col-md-3 p-2">
                <div class="card">
                    <div class="card-body">
                        <h4 class="count-card-title">{{$TotalCategory}}</h4>
                        <h4 class="count-card-text">Total Category</h4>
                    </div>
                </div>
            </div>

            <div class="col-md-3 p-2">
                <div class="card">
                    <div class="card-body">
                        <h4 class="count-card-title">{{$TotalSubCategory}}</h4>
                        <h4 class="count-card-text">Total SubCategory</h4>
                    </div>
                </div>
            </div>
            <div class="col-md-3 p-2">
                <div class="card">
                    <div class="card-body">
                        <h4 class="count-card-title">{{$TotalNotification}}</h4>
                        <h4 class="count-card-text">Total Notification</h4>
                    </div>
                </div>
            </div>
            <div class="col-md-3 p-2">
                <div class="card">
                    <div class="card-body">
                        <h4 class="count-card-title">{{$TotalContact}}</h4>
                        <h4 class="count-card-text">Total Contact</h4>
                    </div>
                </div>
            </div>
            <div class="col-md-3 p-2">
                <div class="card">
                    <div class="card-body">
                        <h4 class="count-card-title">{{$TotalPhoto}}</h4>
                        <h4 class="count-card-text">Total Photo</h4>
                    </div>
                </div>
            </div>
            <div class="col-md-3 p-2">
                <div class="card">
                    <div class="card-body">
                        <h4 class="count-card-title">{{$TotalReview}}</h4>
                        <h4 class="count-card-text">Total Review</h4>
                    </div>
                </div>
            </div>
            <div class="col-md-3 p-2">
                <div class="card">
                    <div class="card-body">
                        <h4 class="count-card-title">{{$TotalSlider}}</h4>
                        <h4 class="count-card-text">Total Slider</h4>
                    </div>
                </div>
            </div>

            <div class="col-md-3 p-2">
                <div class="card">
                    <div class="card-body">
                        <h4 class="count-card-title">{{$TotalVisitor}}</h4>
                        <h4 class="count-card-text">Total Visitor</h4>
                    </div>
                </div>
            </div>

        </div>
    </div>

@endsection

@section('script')
    <script type="text/javascript">

    </script>
@endsection
