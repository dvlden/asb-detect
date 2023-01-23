const isStock = ['Mozilla/5.0', 'Android', 'AppleWebKit', 'Version'].every(
  (value) => {
    return window.navigator.userAgent.includes(value)
  },
)

const detect = (
  message: string = "You are using Android Stock-Browser. To access our web app, you need to download Google Chrome. Click OK and you'll be redirected for download.",
) => {
  if (isStock) {
    alert(message)
    window.location.href = 'market://details?id=com.android.chrome'
  }
}

export const asb = {
  isStock,
  detect,
}
