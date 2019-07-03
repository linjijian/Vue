import { Notification } from 'element-ui';

export default {
  dateFormat(val) {
    const fillWith0 = function(num) {
      if (num < 10) {
        return '0' + num
      }
      return num
    }
    if (!val) {
      return ''
    }
    let date = new Date(val)
    let y = date.getFullYear()
    let m = fillWith0(date.getMonth() + 1)
    let d = fillWith0(date.getDate())
    return [y, m, d].join('-')
  },
  getCatePath: function(cate, arr) {
    arr.unshift(cate.id)
    if (cate.parent) {
      return this.getCatePath(cate.parent, arr)
    } else {
      return arr
    }
  },
  checkFile: function(file, reg, size) {
    if (!reg.test(file.name)) {
      Notification.error({
        message: '文件格式有误'
      })
      return false
    }
    if (file.size > size) {
      Notification.error({
        message: '文件大小不能超过' + size / (1024 * 1024) + 'mb'
      })
      return false
    }
    return true
  },
  async handlePageChange(currPage, pageSize, param, apiRequest) {
    param = Object.assign(param, {
      page: currPage,
      num_per_page: pageSize
    })
    let result = await apiRequest(param)
    return result
  },
  formatAdmin(obj) {
    obj.forEach(function(e) {
      e.href = 'http://wpa.qq.com/msgrd?v=3&uin=' + e.qq + '&site=qq&menu=yes'
      e.src = 'http://wpa.qq.com/pa?p=2:' + e.qq + ':51'
      if (e.gender == '1') {
        e.gender = { label: '男', value: '1' }
      }
      if (e.gender == '0') {
        e.gender = { label: '女', value: '0' }
      }
      if (e.is_on == '0') {
        e.is_on = false
      }
      if (e.is_on == '1') {
        e.is_on = true
      }
    })
  },
  createImage(file) {
    return new Promise((resolve, reject) => {
      var reader = new FileReader()
      reader.onload = (e) => {
        resolve(e.target.result)
      }
      reader.readAsDataURL(file)
    })
  },
  removeArr(arr1, arr2) {
    let temp = []
    let temparray = []
    for (let i = 0; i < arr2.length; i++) {
      temp[arr2[i].id] = true;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (!temp[arr1[i].id]) {
        temparray.push(arr1[i])
      }
    }
    return temparray
  },
  /** 是否为整数 */
  isInt(val) {
    if (isNaN(val)) return false
    return typeof val === 'number' && val % 1 === 0
  },
  // 创建下载element
  createDownloadUrl(url) {
    console.log(url);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.download = 'download';
    a.href = url;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  },

  // 刷新页面
  relaodPage(router) {
    router
    .push({
        path: '/_empty'
    });
    router.go(-1);
  }
}
