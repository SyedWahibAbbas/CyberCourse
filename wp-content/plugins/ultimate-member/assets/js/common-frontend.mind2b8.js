"object"!=typeof window.UM&&(window.UM={}),"object"!=typeof UM.frontend&&(UM.frontend={}),UM.frontend={cropper:{obj:null,init:function(){var o=jQuery(".um-modal .um-single-image-preview img").first();if(o.length&&""!==o.attr("src")){UM.frontend.cropper.obj&&UM.frontend.cropper.destroy();var t=jQuery(".um-modal .um-single-image-preview"),r=o.parent().data("crop"),n=o.parent().data("min_width"),i=o.parent().data("min_height"),a=o.parent().data("ratio"),d=jQuery(".um-modal").find("#um_upload_single").data("ratio"),d=(d&&(a=d.split(":")[0]),jQuery(window).height()-(jQuery(".um-modal-footer a").height()+20)-50-jQuery(".um-modal-header:visible").height());o.css({height:"auto"}),t.css({height:"auto"}),jQuery(window).height()<=400?(t.css({height:d+"px","max-height":d+"px"}),o.css({height:"auto"})):(o.css({height:"auto","max-height":d+"px"}),t.css({height:o.height(),"max-height":d+"px"}));let e;"square"===r?e={minWidth:n,minHeight:i,dragCrop:!1,aspectRatio:1,zoomable:!1,rotatable:!1,dashed:!1}:"cover"===r?(0<Math.round(n/a)&&(i=Math.round(n/a)),e={minWidth:n,minHeight:i,dragCrop:!1,aspectRatio:a,zoomable:!1,rotatable:!1,dashed:!1}):"user"===r&&(e={minWidth:n,minHeight:i,dragCrop:!0,aspectRatio:"auto",zoomable:!1,rotatable:!1,dashed:!1}),e&&(UM.frontend.cropper.obj=new Cropper(o[0],e))}},destroy:function(){0<jQuery(".cropper-container").length&&UM.frontend.cropper.obj&&(UM.frontend.cropper.obj.destroy(),UM.frontend.cropper.obj=null)}}},wp.hooks.addAction("um_remove_modal","um_common_frontend",function(){UM.frontend.cropper.destroy()}),wp.hooks.addAction("um_after_removing_preview","um_common_frontend",function(){UM.frontend.cropper.destroy()}),wp.hooks.addAction("um_window_resize","um_common_frontend",function(){UM.frontend.cropper.destroy()});