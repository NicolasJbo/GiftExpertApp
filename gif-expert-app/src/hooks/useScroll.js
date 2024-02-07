export default function useScroll() {
    function scrollTo(section) {
        let header = document.getElementById(section);
        console.log("##HEADAER ", header)
        let offset = header.offsetHeight

        let elementPos = document.querySelector(`#${section}`)?.offsetTop

        window.scrollTo({
            top: elementPos - offset,
            behavior: 'smooth'
        })
    }



    return {
        scrollTo
    }
}
