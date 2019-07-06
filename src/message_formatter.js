class MessageFormatter {
  constructor (element_id) {
    this.root_element = document.getElementById(element_id)
  }

  display () {
    this.root_element.innerHTML = 'Good morning from our example module.'
  }
}

export default MessageFormatter
