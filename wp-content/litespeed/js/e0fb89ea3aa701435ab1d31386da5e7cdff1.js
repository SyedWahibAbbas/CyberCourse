window.wp=window.wp||{},function(e,l){var u;"undefined"!=typeof _wpPluploadSettings&&(l.extend(u=function(e){var n,t,i,p,d=this,a={container:"container",browser:"browse_button",dropzone:"drop_element"},s={};if(this.supports={upload:u.browser.supported},this.supported=this.supports.upload,this.supported){for(t in this.plupload=l.extend(!0,{multipart_params:{}},u.defaults),this.container=document.body,l.extend(!0,this,e),this)"function"==typeof this[t]&&(this[t]=l.proxy(this[t],this));for(t in a)this[t]&&(this[t]=l(this[t]).first(),this[t].length?(this[t].prop("id")||this[t].prop("id","__wp-uploader-id-"+u.uuid++),this.plupload[a[t]]=this[t].prop("id")):delete this[t]);(this.browser&&this.browser.length||this.dropzone&&this.dropzone.length)&&(this.uploader=new plupload.Uploader(this.plupload),delete this.plupload,this.param(this.params||{}),delete this.params,n=function(t,a,r){var e,o;a&&a.responseHeaders&&(o=a.responseHeaders.match(/x-wp-upload-attachment-id:\s*(\d+)/i))&&o[1]?(o=o[1],(e=s[r.id])&&4<e?(l.ajax({type:"post",url:ajaxurl,dataType:"json",data:{action:"media-create-image-subsizes",_wpnonce:_wpPluploadSettings.defaults.multipart_params._wpnonce,attachment_id:o,_wp_upload_failed_cleanup:!0}}),i(t,a,r,"no-retry")):(s[r.id]=e?++e:1,l.ajax({type:"post",url:ajaxurl,dataType:"json",data:{action:"media-create-image-subsizes",_wpnonce:_wpPluploadSettings.defaults.multipart_params._wpnonce,attachment_id:o}}).done(function(e){e.success?p(d.uploader,r,e):(e.data&&e.data.message&&(t=e.data.message),i(t,a,r,"no-retry"))}).fail(function(e){500<=e.status&&e.status<600?n(t,a,r):i(t,a,r,"no-retry")}))):i(pluploadL10n.http_error_image,a,r,"no-retry")},i=function(e,t,a,r){var o=a.type&&0===a.type.indexOf("image/"),i=t&&t.status;"no-retry"!==r&&o&&500<=i&&i<600?n(e,t,a):(a.attachment&&a.attachment.destroy(),u.errors.unshift({message:e||pluploadL10n.default_error,data:t,file:a}),d.error(e,t,a))},p=function(e,t,a){_.each(["file","loaded","size","percent"],function(e){t.attachment.unset(e)}),t.attachment.set(_.extend(a.data,{uploading:!1})),wp.media.model.Attachment.get(a.data.id,t.attachment),u.queue.all(function(e){return!e.get("uploading")})&&u.queue.reset(),d.success(t.attachment)},this.uploader.bind("init",function(e){var t,a,r=d.dropzone,e=d.supports.dragdrop=e.features.dragdrop&&!u.browser.mobile;if(r){if(r.toggleClass("supports-drag-drop",!!e),!e)return r.unbind(".wp-uploader");r.on("dragover.wp-uploader",function(){t&&clearTimeout(t),a||(r.trigger("dropzone:enter").addClass("drag-over"),a=!0)}),r.on("dragleave.wp-uploader, drop.wp-uploader",function(){t=setTimeout(function(){a=!1,r.trigger("dropzone:leave").removeClass("drag-over")},0)}),d.ready=!0,l(d).trigger("uploader:ready")}}),this.uploader.bind("postinit",function(e){e.refresh(),d.init()}),this.uploader.init(),this.browser?this.browser.on("mouseenter",this.refresh):this.uploader.disableBrowse(!0),l(d).on("uploader:ready",function(){l('.moxie-shim-html5 input[type="file"]').attr({tabIndex:"-1","aria-hidden":"true"})}),this.uploader.bind("FilesAdded",function(r,e){_.each(e,function(e){var t,a;if(plupload.FAILED!==e.status){if("image/heic"===e.type&&r.settings.heic_upload_error)u.errors.unshift({message:pluploadL10n.unsupported_image,data:{},file:e});else{if("image/webp"===e.type&&r.settings.webp_upload_error)return i(pluploadL10n.noneditable_image,{},e,"no-retry"),void r.removeFile(e);if("image/avif"===e.type&&r.settings.avif_upload_error)return i(pluploadL10n.noneditable_image,{},e,"no-retry"),void r.removeFile(e)}t=_.extend({file:e,uploading:!0,date:new Date,filename:e.name,menuOrder:0,uploadedTo:wp.media.model.settings.post.id},_.pick(e,"loaded","size","percent")),(a=/(?:jpe?g|png|gif)$/i.exec(e.name))&&(t.type="image",t.subtype="jpg"===a[0]?"jpeg":a[0]),e.attachment=wp.media.model.Attachment.create(t),u.queue.add(e.attachment),d.added(e.attachment)}}),r.refresh(),r.start()}),this.uploader.bind("UploadProgress",function(e,t){t.attachment.set(_.pick(t,"loaded","percent")),d.progress(t.attachment)}),this.uploader.bind("FileUploaded",function(e,t,a){try{a=JSON.parse(a.response)}catch(e){return i(pluploadL10n.default_error,e,t)}return!_.isObject(a)||_.isUndefined(a.success)?i(pluploadL10n.default_error,null,t):a.success?void p(e,t,a):i(a.data&&a.data.message,a.data,t)}),this.uploader.bind("Error",function(e,t){var a,r=pluploadL10n.default_error;for(a in u.errorMap)if(t.code===plupload[a]){"function"==typeof(r=u.errorMap[a])&&(r=r(t.file,t));break}i(r,t,t.file),e.refresh()}))}},_wpPluploadSettings),u.uuid=0,u.errorMap={FAILED:pluploadL10n.upload_failed,FILE_EXTENSION_ERROR:pluploadL10n.invalid_filetype,IMAGE_FORMAT_ERROR:pluploadL10n.not_an_image,IMAGE_MEMORY_ERROR:pluploadL10n.image_memory_exceeded,IMAGE_DIMENSIONS_ERROR:pluploadL10n.image_dimensions_exceeded,GENERIC_ERROR:pluploadL10n.upload_failed,IO_ERROR:pluploadL10n.io_error,SECURITY_ERROR:pluploadL10n.security_error,FILE_SIZE_ERROR:function(e){return pluploadL10n.file_exceeds_size_limit.replace("%s",e.name)},HTTP_ERROR:function(e){return e.type&&0===e.type.indexOf("image/")?pluploadL10n.http_error_image:pluploadL10n.http_error}},l.extend(u.prototype,{param:function(e,t){if(1===arguments.length&&"string"==typeof e)return this.uploader.settings.multipart_params[e];1<arguments.length?this.uploader.settings.multipart_params[e]=t:l.extend(this.uploader.settings.multipart_params,e)},init:function(){},error:function(){},success:function(){},added:function(){},progress:function(){},complete:function(){},refresh:function(){var e,t,a;if(this.browser){for(e=this.browser[0];e;){if(e===document.body){t=!0;break}e=e.parentNode}t||(a="wp-uploader-browser-"+this.uploader.id,(a=(a=l("#"+a)).length?a:l('<div class="wp-uploader-browser" />').css({position:"fixed",top:"-1000px",left:"-1000px",height:0,width:0}).attr("id","wp-uploader-browser-"+this.uploader.id).appendTo("body")).append(this.browser))}this.uploader.refresh()}}),u.queue=new wp.media.model.Attachments([],{query:!1}),u.errors=new Backbone.Collection,e.Uploader=u)}(wp,jQuery)
;