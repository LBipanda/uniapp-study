function success(message){
    uni.showToast({
        title: message,
        duration: 2000,
        mask:true
    });
}

function error(message){
    uni.showToast({
        title: message,
        duration: 2000,
        icon:'none',
        mask:true
    });
}

function loading(isVisibleMask=true){
    uni.showLoading({
        mask:isVisibleMask,
		title: '加载中'
    });
    return uni.hideLoading;
}

function confirm({title='温馨提示',content,showCancel=true, cancelText='取消', cancelColor='#2D3132', confirmText='确定', confirmColor='#E64C3D'}){
    uni.hideLoading();
    return new Promise((resolve,reject)=>{
        return uni.showModal({
            title,
            content,
            showCancel,
			cancelText,
			cancelColor,
			confirmText,
			confirmColor,
            success: function (res) {
                if (res.confirm) {
                    resolve();
                } else if (res.cancel) {
                    reject();
                }
            }
        });
    })
}

export default {success,error,loading,confirm}

