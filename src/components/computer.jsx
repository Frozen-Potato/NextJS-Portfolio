"use client";
import { motion } from "framer-motion";

const Computer = () => {
    return (
        <div>
            <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_2_2)">
                    <path d="M87.374 50.087V269.357H424.626V50.087H87.374ZM391.235 235.965H120.765V83.478H391.235V235.965Z" fill="black"/>
                    <path d="M448.189 415.822H339.111V449.213H448.189V415.822Z" fill="black"/>
                    <path d="M410.311 358.4V319.443H474.713V0H37.287V319.443H101.689V358.4H0V512H512V358.4H410.311ZM70.678 286.052V33.391H441.321V286.052H70.678ZM376.92 319.443V358.4H135.08V319.443H376.92ZM478.609 478.609H33.391V391.792H478.608V478.609H478.609Z" fill="black"/>
                    <path d="M90.899 410.802H57.508V459.776H90.899V410.802Z" fill="black"/>
                    <path d="M179.945 410.802H146.554V459.776H179.945V410.802Z" fill="black"/>
                    <path d="M135.424 410.802H102.033V459.776H135.424V410.802Z" fill="black"/>
                    <g clip-path="url(#clip1_2_2)">
                        <motion.path animate={{rotate:-360}} transition={{ repeat:Infinity, duration: 6, ease: "linear" }} d="M199.507 126.317C199.082 126.341 198.674 126.499 198.343 126.767C198.012 127.036 197.774 127.402 197.663 127.814L195.96 134.112C195.146 134.453 194.352 134.835 193.579 135.263L187.585 132.689C187.193 132.521 186.758 132.48 186.342 132.573C185.926 132.665 185.549 132.886 185.266 133.205L179.863 139.271C179.579 139.59 179.403 139.989 179.359 140.413C179.315 140.837 179.405 141.264 179.618 141.634L182.861 147.28C182.525 148.101 182.234 148.938 181.989 149.791L175.937 152.207C175.541 152.365 175.205 152.644 174.976 153.004C174.747 153.364 174.638 153.786 174.663 154.212L175.132 162.323C175.156 162.749 175.314 163.157 175.583 163.488C175.851 163.819 176.218 164.057 176.629 164.168L182.939 165.874C183.279 166.683 183.66 167.471 184.085 168.239L181.504 174.246C181.336 174.638 181.295 175.073 181.388 175.489C181.48 175.905 181.701 176.281 182.02 176.565L188.087 181.972C188.405 182.256 188.805 182.432 189.229 182.476C189.653 182.52 190.08 182.429 190.449 182.217L196.107 178.965C196.923 179.298 197.754 179.586 198.601 179.83L201.022 185.897C201.18 186.293 201.459 186.63 201.819 186.858C202.179 187.087 202.602 187.197 203.027 187.172L211.139 186.703C211.565 186.679 211.972 186.521 212.303 186.252C212.634 185.983 212.872 185.617 212.984 185.205L214.689 178.887C215.496 178.549 216.284 178.168 217.051 177.745L223.062 180.331C223.453 180.499 223.888 180.539 224.304 180.447C224.72 180.354 225.097 180.133 225.38 179.815L230.783 173.744C231.067 173.426 231.243 173.026 231.287 172.602C231.331 172.178 231.24 171.751 231.028 171.382L227.78 165.728C228.116 164.91 228.404 164.075 228.649 163.226L234.709 160.809C235.105 160.651 235.441 160.372 235.67 160.012C235.898 159.652 236.008 159.229 235.983 158.804L235.514 150.692C235.49 150.266 235.332 149.859 235.063 149.528C234.794 149.197 234.428 148.959 234.017 148.847L227.715 147.146C227.374 146.332 226.991 145.54 226.564 144.768L229.142 138.769C229.31 138.378 229.351 137.943 229.258 137.527C229.166 137.111 228.945 136.734 228.626 136.451L222.559 131.047C222.241 130.764 221.842 130.588 221.418 130.544C220.994 130.5 220.566 130.59 220.197 130.803L214.554 134.042C213.731 133.705 212.892 133.415 212.036 133.17L209.624 127.122C209.466 126.726 209.187 126.39 208.827 126.161C208.467 125.932 208.045 125.823 207.619 125.847L199.507 126.317ZM201.203 130.288L206.392 129.988L208.6 135.527C208.721 135.83 208.913 136.1 209.161 136.314C209.408 136.527 209.704 136.677 210.022 136.752C211.364 137.068 212.672 137.519 213.923 138.1C214.217 138.237 214.541 138.302 214.866 138.289C215.191 138.275 215.508 138.184 215.79 138.023L220.952 135.058L224.831 138.513L222.471 144.006C222.342 144.306 222.287 144.632 222.31 144.957C222.334 145.282 222.436 145.597 222.606 145.874C223.326 147.042 223.928 148.277 224.398 149.566C224.509 149.872 224.692 150.147 224.931 150.368C225.171 150.588 225.46 150.748 225.774 150.833L231.543 152.391L231.843 157.58L226.297 159.792C225.994 159.913 225.725 160.105 225.513 160.352C225.3 160.599 225.15 160.893 225.075 161.21C224.757 162.546 224.302 163.846 223.722 165.091C223.584 165.387 223.52 165.711 223.534 166.037C223.548 166.362 223.64 166.68 223.802 166.962L226.776 172.139L223.321 176.023L217.815 173.655C217.516 173.526 217.19 173.472 216.865 173.496C216.539 173.52 216.225 173.622 215.948 173.794C214.784 174.509 213.555 175.108 212.272 175.576C211.965 175.687 211.69 175.87 211.47 176.11C211.249 176.349 211.089 176.638 211.004 176.953L209.443 182.738L204.255 183.038L202.038 177.479C201.917 177.176 201.725 176.907 201.478 176.693C201.231 176.48 200.937 176.329 200.62 176.254C199.286 175.938 197.986 175.49 196.743 174.912C196.448 174.775 196.125 174.71 195.8 174.724C195.475 174.737 195.158 174.828 194.876 174.99L189.695 177.968L185.815 174.508L188.179 169.007C188.308 168.708 188.363 168.381 188.339 168.056C188.316 167.731 188.214 167.417 188.043 167.139C187.326 165.975 186.726 164.74 186.257 163.455C186.145 163.15 185.962 162.876 185.722 162.656C185.483 162.436 185.194 162.277 184.88 162.192L179.103 160.63L178.803 155.442L184.346 153.23C184.649 153.109 184.918 152.917 185.132 152.67C185.345 152.424 185.496 152.129 185.571 151.812C185.888 150.473 186.339 149.17 186.92 147.923C187.058 147.627 187.122 147.303 187.108 146.977C187.094 146.652 187.002 146.334 186.84 146.051L183.87 140.882L187.325 137.003L192.815 139.36C193.114 139.488 193.44 139.542 193.765 139.518C194.091 139.494 194.405 139.392 194.682 139.221C195.851 138.501 197.088 137.899 198.378 137.429C198.684 137.318 198.959 137.135 199.18 136.896C199.4 136.656 199.56 136.367 199.645 136.053L201.203 130.288Z" fill="black"/>
                        <motion.path animate={{rotate:-360}} transition={{ repeat:Infinity, duration: 6, ease: "linear" }} d="M204.494 142.301C196.679 142.753 190.673 149.513 191.125 157.328C191.577 165.144 198.321 171.151 206.137 170.698C213.952 170.246 219.974 163.501 219.522 155.686C219.07 147.87 212.31 141.849 204.494 142.301ZM204.729 146.358C210.353 146.033 215.14 150.297 215.465 155.92C215.791 161.544 211.526 166.316 205.902 166.642C200.278 166.967 195.507 162.717 195.182 157.094C194.856 151.47 199.105 146.683 204.729 146.358Z" fill="black"/>
                    </g>
                    <motion.path animate={{rotate:360}} transition={{ repeat:Infinity, duration: 3, ease: "linear" }} fill-rule="evenodd" clip-rule="evenodd" d="M245.612 102.728L245.084 106.546C246.308 107.23 247.41 108.094 248.358 109.096L251.931 107.644L255.697 116.908L252.125 118.36C252.134 119.044 252.092 119.738 251.995 120.437C251.898 121.135 251.751 121.814 251.557 122.471L254.6 124.838L248.46 132.732L245.416 130.363C244.231 131.071 242.936 131.603 241.572 131.929L241.043 135.747L231.138 134.376L231.666 130.559C230.441 129.874 229.34 129.011 228.392 128.008L224.818 129.461L221.052 120.197L224.624 118.745C224.615 118.06 224.658 117.367 224.754 116.668C224.851 115.969 224.999 115.29 225.193 114.634L222.149 112.266L228.289 104.373L231.334 106.741C232.519 106.034 233.813 105.502 235.178 105.175L235.706 101.358L245.612 102.728ZM239.06 113.599C236.325 113.221 233.8 115.132 233.422 117.867C233.043 120.602 234.954 123.127 237.689 123.505C240.425 123.883 242.949 121.973 243.328 119.237C243.706 116.502 241.795 113.978 239.06 113.599Z" fill="black"/>
                    <g clip-path="url(#clip2_2_2)">
                        <motion.path animate={{rotate:360}} transition={{ repeat:Infinity, duration: 9, ease: "linear" }} d="M319.012 162.776C318.213 160.053 317.125 157.43 315.761 154.936L324.115 146.582L308.241 130.708L299.887 139.062C297.393 137.697 294.77 136.609 292.047 135.811V124H269.598V135.811C266.876 136.609 264.253 137.697 261.758 139.062L253.404 130.708L237.53 146.581L245.885 154.936C244.52 157.43 243.432 160.053 242.634 162.775H230.823V185.224H242.633C243.432 187.947 244.52 190.57 245.884 193.064L237.53 201.418L253.404 217.292L261.758 208.938C264.252 210.303 266.875 211.391 269.598 212.189V224H292.047V212.189C294.769 211.391 297.392 210.303 299.887 208.938L308.241 217.292L324.115 201.419L315.76 193.064C317.125 190.57 318.213 187.947 319.011 185.225H330.823V162.776H319.012ZM324.7 179.102H314.201L313.66 181.486C312.82 185.187 311.364 188.699 309.332 191.923L308.029 193.991L315.456 201.418L308.241 208.633L300.814 201.206L298.746 202.51C295.522 204.541 292.01 205.997 288.308 206.837L285.925 207.378V217.877H275.721V207.378L273.337 206.837C269.635 205.997 266.123 204.541 262.899 202.51L260.831 201.207L253.404 208.634L246.189 201.418L253.616 193.991L252.313 191.923C250.281 188.699 248.825 185.187 247.985 181.485L247.444 179.102H236.945V168.898H247.444L247.985 166.514C248.825 162.813 250.281 159.301 252.313 156.077L253.616 154.008L246.189 146.582L253.404 139.366L260.831 146.793L262.899 145.49C266.123 143.459 269.635 142.003 273.337 141.163L275.72 140.621V130.122H285.924V140.621L288.308 141.163C292.01 142.003 295.522 143.458 298.746 145.49L300.814 146.793L308.241 139.366L315.456 146.581L308.03 154.008L309.333 156.077C311.364 159.301 312.82 162.813 313.66 166.514L314.201 168.898H324.7L324.7 179.102Z" fill="black"/>
                        <motion.path animate={{rotate:360}} transition={{ repeat:Infinity, duration: 9, ease: "linear" }} d="M280.823 150.531C267.882 150.531 257.353 161.059 257.353 174C257.353 186.941 267.882 197.469 280.823 197.469C293.764 197.469 304.292 186.941 304.292 174C304.292 161.059 293.764 150.531 280.823 150.531ZM280.823 191.347C271.257 191.347 263.476 183.565 263.476 174C263.476 164.435 271.257 156.653 280.823 156.653C290.388 156.653 298.169 164.435 298.169 174C298.169 183.565 290.388 191.347 280.823 191.347Z" fill="black"/>
                    </g>
                </g>
                <defs>
                <clipPath id="clip0_2_2">
                    <rect width="512" height="512" fill="white"/>
                </clipPath>
                <clipPath id="clip1_2_2">
                    <rect width="65" height="65" fill="white" transform="translate(171 125.931) rotate(-3.31046)"/>
                </clipPath>
                <clipPath id="clip2_2_2">
                    <rect width="100" height="100" fill="white" transform="translate(230.823 124)"/>
                </clipPath>
                </defs>
            </svg>
        </div>
    )
}

export default Computer