@extends('Layout.app')

@section('content')

        <div class="container mt-5">
            <h3>Terms and Condition</h3>
            <hr>
            <hr>
            <textarea id="TermsTextArea" class="SiteInfoTextArea"></textarea>
            <hr>
            <button id="TermsUpdateBtn" class="btn btn-brown">Edit And Update</button>
        </div>

        <!--Terms Modal -->
        <div class="modal fade" id="TermsModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Do you want to Update</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body text-center">
                        <p id="TermsModalCode"> </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">No</button>
                        <button data-id=" " id="TermsConfirmBtn" type="button" class="btn btn-sm btn-primary">Yes</button>
                    </div>
                </div>
            </div>
        </div>

@endsection

@section('script')

    <script type="text/javascript">
        $('#TermsUpdateBtn').click(function(){
            $('#TermsModal').modal('show');
        });
        getSiteInfoData();

    </script>

@endsection

