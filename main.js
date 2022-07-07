const linksSocialMedia = {
    github: 'heym4rc',
    instagram: 'heym4rc',
    facebook: 'heym4rc',
    twitter: ''
}

function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    }
}

changeSocialMediaLinks()

function getUserProfileInfo() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            userLogin.textContent = data.login
            userLink.href = data.html_url
            photoProfile.src = data.avatar_url
        })
}

getUserProfileInfo()