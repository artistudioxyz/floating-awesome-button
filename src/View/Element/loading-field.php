<div
    id="<?php echo  (isset($args['id']))? $args['id'] : '' ?>"
    class="<?php echo  (isset($args['class']))? $args['class'] : '' ?>"
>
    <div class="fab-loading-field">
        <div class="row">
            <div class="">
                <img src="<?php echo  json_decode(FAB_PATH)['plugin_url'] ?>/assets/img/loading.gif" class="ico-loading" alt="Loading...">
            </div>
            <div class="loading-label">
                Loading...
            </div>
        </div>
    </div>
</div>