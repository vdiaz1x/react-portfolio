// importing React component to extend new components
import React, { Component } from 'react';
// import logo from './logo.svg';

// importing css
import './style.css';

//importing partials
import Header from './partials/Header';
import Footer from './partials/Footer';

// importing components
import AboutMe from './components/AboutMe';
import Tech from './components/Tech';
import Projects from './components/Projects';
import Contact from './components/Contact'

class App extends Component {
  constructor(props){
    super(props);

    // state
    this.state = {
      icons:[
        // html 5
        {
          svg: <svg viewBox="0 0 128 128">
            <path fill="#E44D26" d="M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387 10.015-112.107h-109.936zm89.126 26.539l-.627 7.172-.276 3.289h-52.665000000000006l1.257 14h50.156000000000006l-.336 3.471-3.233 36.119-.238 2.27-28.196 7.749v.002l-.034.018-28.177-7.423-1.913-21.206h13.815000000000001l.979 10.919 15.287 4.081h.043v-.546l15.355-3.875 1.604-17.579h-47.698l-3.383-38.117-.329-3.883h68.939l-.33 3.539z"></path>
          </svg>,
          name: 'HTML5',
          description: "lorem ipsum"
        },
        // css3
        {
          svg: <svg viewBox="0 0 128 128">
            <path fill="#1572B6" d="M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626 10.063-112.837h-110.48zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336-28.36 7.844v.001l-.022.019-28.311-7.888-1.917-21.739h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229 1.632-18.001h-32.282999999999994l-.277-3.043-.631-7.129-.331-3.828h34.748999999999995l1.264-14h-52.926l-.277-3.041-.63-7.131-.332-3.828h69.281l-.331 3.862z"></path>
          </svg>,
          name:'CSS5',
          description:"lorem ipsum"
        },
        // javascript
        {
          svg: <svg viewBox="0 0 128 128">
            <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185h-125.184z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>
          </svg>,
          name:"Javascript",
          description:"lorem ipsum"
        },
        // jquery
        {
          svg: <svg viewBox="0 0 128 128">
            <path fill="#0868AC" d="M9.625 32.181c-11.029 15.851-9.656 36.476-1.231 53.32.2.404.41.801.617 1.198l.394.759.246.437.439.786c.262.461.53.92.804 1.379l.459.756c.304.491.615.976.933 1.46l.398.614c.439.655.888 1.309 1.352 1.951l.039.05.228.308c.401.553.814 1.099 1.232 1.639l.464.59c.373.469.752.935 1.138 1.399l.435.52c.518.61 1.047 1.217 1.586 1.812l.033.033.061.068c.527.575 1.066 1.137 1.612 1.699l.517.521c.423.426.853.845 1.287 1.262l.527.5c.58.547 1.166 1.083 1.764 1.607l.028.022.307.262c.527.456 1.063.909 1.603 1.353l.664.529c.441.354.887.702 1.336 1.044l.714.543c.496.365.995.724 1.499 1.075l.546.387.15.107c.478.329.967.646 1.456.963l.63.42c.75.474 1.51.943 2.279 1.396l.63.355c.565.326 1.134.646 1.71.959.312.168.632.327.946.488.407.213.811.429 1.225.636l.283.137.501.242c.641.306 1.287.607 1.94.897l.41.184c.748.327 1.502.641 2.263.941l.551.217c.704.271 1.418.539 2.135.791l.268.093c.787.275 1.581.53 2.381.779l.575.172c.814.245 1.619.538 2.458.693 53.339 9.727 68.833-32.053 68.833-32.053-13.013 16.953-36.111 21.425-57.996 16.446-.829-.187-1.633-.446-2.442-.685l-.609-.185c-.79-.242-1.573-.497-2.352-.765l-.323-.117c-.698-.245-1.387-.504-2.074-.769l-.582-.229c-.752-.297-1.5-.607-2.239-.931l-.447-.198c-.635-.288-1.263-.578-1.889-.879l-.546-.262c-.491-.239-.977-.493-1.461-.743-.324-.171-.654-.332-.975-.51-.592-.317-1.172-.646-1.751-.982l-.591-.33c-.769-.452-1.528-.921-2.28-1.397l-.615-.41c-.545-.351-1.088-.709-1.623-1.079l-.522-.367c-.516-.365-1.027-.734-1.534-1.109l-.679-.514c-.465-.355-.927-.713-1.384-1.082l-.617-.495c-.582-.479-1.156-.959-1.724-1.453l-.189-.159c-.614-.539-1.216-1.092-1.812-1.647l-.511-.491c-.441-.42-.875-.843-1.302-1.277l-.51-.509c-.543-.556-1.076-1.119-1.598-1.69l-.079-.084c-.552-.604-1.092-1.221-1.621-1.844l-.424-.504c-.394-.475-.785-.956-1.167-1.442l-.427-.532c-.459-.596-.908-1.189-1.347-1.794-12.15-16.574-16.516-39.432-6.805-58.204M43.862 18.825c-7.977 11.478-7.543 26.844-1.321 38.983 1.043 2.035 2.216 4.01 3.528 5.889 1.195 1.713 2.52 3.751 4.106 5.127.575.633 1.176 1.251 1.79 1.858l.472.465c.596.578 1.201 1.146 1.828 1.698l.074.064.018.018c.693.608 1.408 1.191 2.135 1.767l.485.378c.729.559 1.472 1.107 2.233 1.631l.065.049c.336.232.678.448 1.019.672l.483.319c.544.349 1.095.689 1.655 1.015l.235.136c.483.278.972.552 1.463.818l.521.271c.339.177.678.358 1.023.53l.155.07c.703.346 1.412.68 2.136.995l.472.194c.579.246 1.164.486 1.75.71l.75.275c.533.198 1.068.378 1.607.559l.727.233c.767.238 1.525.539 2.324.672 41.183 6.823 50.691-24.886 50.691-24.886-8.57 12.343-25.168 18.233-42.879 13.635-.787-.207-1.562-.431-2.333-.674l-.701-.227c-.548-.177-1.092-.365-1.631-.562l-.736-.274c-.592-.228-1.176-.462-1.756-.708l-.473-.2c-.727-.316-1.443-.65-2.148-.999-.363-.177-.72-.364-1.078-.548l-.622-.32c-.458-.248-.914-.506-1.363-.77l-.326-.185c-.558-.325-1.107-.661-1.651-1.008l-.498-.332c-.359-.232-.717-.469-1.069-.707-.759-.524-1.498-1.072-2.226-1.628l-.501-.395c-7.752-6.12-13.898-14.486-16.819-23.971-3.062-9.836-2.402-20.878 2.903-29.84M72.657 8.847c-4.702 6.92-5.164 15.514-1.901 23.156 3.441 8.113 10.491 14.476 18.72 17.495.339.125.679.237 1.022.354l.451.143c.485.152.966.329 1.467.424 22.74 4.394 28.908-11.669 30.549-14.034-5.402 7.779-14.482 9.646-25.623 6.942-.88-.213-1.847-.531-2.695-.832-1.088-.388-2.16-.83-3.201-1.329-1.978-.951-3.864-2.104-5.612-3.424-9.969-7.565-16.162-21.994-9.657-33.745"></path>
          </svg>,
          name: "jQuery",
          description: "lorem ipsum"
        },
        // git
        {
          svg: <svg viewBox="0 0 128 128">
            <path fill="#F34F29" d="M124.737 58.378l-55.116-55.114c-3.172-3.174-8.32-3.174-11.497 0l-11.444 11.446 14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679-3.78 3.78-9.901 3.78-13.683 0-2.842-2.844-3.545-7.019-2.105-10.521l-13.048-13.048-.002 34.341c.922.455 1.791 1.063 2.559 1.828 3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683.934-.933 2.014-1.638 3.167-2.11v-34.659c-1.153-.472-2.231-1.172-3.167-2.111-2.862-2.86-3.551-7.06-2.083-10.576l-14.313-14.313-37.792 37.79c-3.175 3.177-3.175 8.325 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858c3.174-3.176 3.174-8.327-.001-11.501z"></path>
          </svg>,
          name: "git",
          description: "lorem ipsum"
        },
        // node
        {
          svg: <svg viewBox="0 0 128 128">
            <path fill="#83CD29" d="M112.771 30.334l-44.097-25.605c-2.781-1.584-6.402-1.584-9.205 0l-44.568 25.605c-2.87 1.651-4.901 4.754-4.901 8.073v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623c-.712 0-2.306 1.061-2.306 1.773v50.49c0 3.896-3.524 7.773-10.11 4.48l-12.167-7.013c-.424-.23-.723-.693-.723-1.181v-51.142c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754c1.417.82 3.027 1.246 4.647 1.246 1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083v-51.142c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"></path>
          </svg>,
          name:'node',
          description:"lorem ipsum"
        },
        // express
        {
          svg: <svg fill="#bbb" viewBox="0 0 128 128">
            <path d="M126.67,98.44c-4.56,1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89,76,81.85,85.2,75.14,94.77c-2.4,3.42-4.92,4.91-9.4,3.7L92.66,62.34,67.6,29.71c4.31-.84,7.29-.41,9.93,3.45,5.83,8.52,12.26,16.63,18.67,25.21C102.65,49.82,109,41.7,115,33.26c2.41-3.42,5-4.72,9.33-3.46-3.28,4.35-6.49,8.63-9.72,12.88-4.36,5.73-8.64,11.53-13.16,17.14-1.61,2-1.35,3.3.09,5.19C109.9,76,118.16,87.1,126.67,98.44Z"></path><path d="M1.33,61.74c.72-3.61,1.2-7.29,2.2-10.83,6-21.43,30.6-30.34,47.5-17.06C60.93,41.64,63.39,52.62,62.9,65H7.1c-.84,22.21,15.15,35.62,35.53,28.78,7.15-2.4,11.36-8,13.47-15,1.07-3.51,2.84-4.06,6.14-3.06-1.69,8.76-5.52,16.08-13.52,20.66-12,6.86-29.13,4.64-38.14-4.89C5.26,85.89,3,78.92,2,71.39c-.15-1.2-.46-2.38-.7-3.57Q1.33,64.78,1.33,61.74ZM7.2,60.25H57.63c-.33-16.06-10.33-27.47-24-27.57C18.63,32.56,7.85,43.7,7.2,60.25Z"></path>
          </svg>,
          name:'express',
          description:"lorem ipsum"
        },
        // postgresql
        {
          svg: <svg viewBox="0 0 128 128">
            <path fillRule="evenodd" clipRule="evenodd" fill="#336791" d="M123.258 76.784c-.45-2.918-2.901-4.829-5.752-4.958-1.032-.047-2.08.061-3.109.192-1.243.158-2.471.438-3.711.623-.857.128-1.726.187-2.582.275l-.021-.111c1.598-3.018 3.263-6.003 4.775-9.064 1.159-2.348 2.151-4.781 3.176-7.194 1.696-3.998 3.051-8.12 4.173-12.309 1.075-4.011 1.995-8.066 2.284-12.227.116-1.662.196-3.331.187-4.995-.008-1.327-.151-2.656-.284-3.979-.15-1.516-.608-2.953-1.242-4.336-.836-1.822-2.132-3.317-3.496-4.737-1.092-1.137-2.293-2.173-3.484-3.208-1.698-1.477-3.607-2.656-5.59-3.703-2.253-1.19-4.621-2.121-7.09-2.75-1.493-.381-3.02-.664-4.532-.966-.544-.11-1.089-.337-1.633-.337h-10.241c-.37 0-.737.191-1.11.233-2.452.273-4.875.735-7.228 1.464-.88.273-1.684.101-2.52.024-.641-.059-1.271-.231-1.912-.263-2.442-.122-4.887-.301-7.328-.275-2.339.024-4.654.409-6.918 1.052-1.895.538-3.749 1.195-5.447 2.191-.727.426-1.303.346-2.055.129-2.527-.729-5.072-1.414-7.639-1.989-1.6-.358-3.245-.536-4.879-.707-1.566-.163-3.144-.261-4.718-.294-1.538-.033-3.087-.032-4.618.104-2.439.217-4.832.713-7.158 1.513-2.583.888-4.951 2.175-7.086 3.865-2.167 1.715-3.905 3.809-5.303 6.2-1.473 2.523-2.483 5.224-3.111 8.061-.34 1.537-.555 3.117-.788 4.678-.073.486.732.972-.268 1.456v6.794c1 .452.208.903.266 1.356.139 1.089.262 2.187.446 3.268.291 1.711.636 3.417.988 5.117.491 2.375 1.002 4.748 1.546 7.111.396 1.72.847 3.43 1.319 5.131.721 2.598 1.431 5.201 2.246 7.77.757 2.387 1.624 4.74 2.484 7.093 1.191 3.255 2.617 6.405 4.327 9.424 1.479 2.614 3.169 5.062 5.436 7.076 1.494 1.327 3.157 2.347 5.093 2.857 1.521.4 3.067.448 4.624.129 1.805-.37 3.403-1.147 4.824-2.311.163-.134.342-.236.535.01.735.931 1.719 1.552 2.748 2.089 2.777 1.448 5.803 1.882 8.877 2.059.744.043 1.496-.064 2.246-.085 1.461-.04 2.881-.325 4.278-.729.732-.212 1.447-.481 2.192-.732.039.793.089 1.557.112 2.321l.104 4.166c.019.634.044 1.27.103 1.901.151 1.627.299 3.255.493 4.877.135 1.118.275 2.245.538 3.336.529 2.203 1.246 4.348 2.158 6.428.895 2.041 2.182 3.764 3.9 5.185 2.22 1.836 4.822 2.619 7.632 2.764 1.162.061 2.357.004 3.501-.204 1.813-.329 3.622-.743 5.387-1.275 3.591-1.084 6.695-2.956 9.014-5.981 1.32-1.724 2.404-3.589 3.1-5.648.574-1.701 1.115-3.419 1.545-5.16.34-1.372.508-2.787.715-4.188.137-.927.219-1.863.305-2.797.14-1.517.283-3.033.384-4.553.07-1.058.067-2.121.109-3.181.013-.323.065-.644.095-.966.028-.298.178-.401.482-.396 1.071.016 2.144.044 3.212-.004 1.197-.054 2.405-.105 3.583-.303 1.677-.281 3.346-.636 4.99-1.067 1.943-.508 3.725-1.418 5.44-2.455 1.998-1.207 3.819-2.623 5.297-4.447 1.285-1.591 1.894-3.43 1.584-5.438zm-3.412.982c-.066.915-.485 1.699-1.093 2.369-2.869 3.163-6.468 5.082-10.585 6.027-1.564.358-3.178.544-4.779.692-1.363.126-2.746.147-4.114.097-1.006-.038-2.004-.268-3.032-.416-.103.94-.201 1.919-.32 2.896l-.479 3.745c-.145 1.187-.258 2.378-.407 3.564-.146 1.151-.328 2.298-.481 3.449-.143 1.072-.248 2.149-.407 3.219-.245 1.64-.479 3.284-.799 4.911-.384 1.945-.973 3.829-1.934 5.583-1.172 2.141-2.834 3.772-4.949 4.98-2.18 1.246-4.563 1.894-6.979 2.436-1.71.384-3.472.447-5.204.291-3.004-.272-5.568-1.557-7.506-3.886-1.85-2.223-3.102-4.771-3.55-7.655-.214-1.371-.368-2.754-.491-4.136-.136-1.537-.229-3.079-.299-4.62-.089-1.957-.154-3.914-.197-5.871-.053-2.406-.07-4.812-.104-7.218l-.006-.092c-1.224.734-2.427 1.538-3.703 2.2-1.494.776-3.117 1.226-4.798 1.353-1.318.1-2.653.191-3.965.086-2.151-.173-4.3-.51-6.226-1.569-.781-.43-1.596-.953-2.134-1.64-1.29-1.646-.672-3.726 1.273-4.727 1.344-.693 2.811-.982 4.268-1.319 1.266-.293 2.526-.626 3.761-1.029 1.222-.4 1.993-1.391 2.754-2.363l1.206-1.551c-.503-.053-.977-.107-1.451-.151-1.439-.136-2.812-.532-4.125-1.114-1.124-.497-1.141-.551-1.965.343-1.376 1.494-2.714 3.023-4.062 4.542-.992 1.117-1.978 2.241-2.965 3.361-.978 1.108-1.894 2.279-2.947 3.31-1.564 1.531-3.449 2.452-5.698 2.348-1.443-.066-2.764-.572-3.952-1.399-2.452-1.708-4.104-4.097-5.608-6.606-1.927-3.215-3.406-6.64-4.672-10.159-.876-2.432-1.756-4.866-2.521-7.333-.831-2.681-1.56-5.396-2.277-8.11-.542-2.048-1.023-4.113-1.482-6.182-.521-2.353-1.022-4.71-1.464-7.079-.298-1.599-.471-3.221-.712-4.831-.325-2.17-.385-4.36-.267-6.539.105-1.963.387-3.921.667-5.871.388-2.698 1.277-5.244 2.556-7.648.783-1.473 1.755-2.812 2.879-4.056 1.845-2.042 4.078-3.518 6.562-4.626 1.736-.774 3.57-1.24 5.439-1.604 2.774-.54 5.573-.519 8.373-.461 1.224.025 2.443.248 3.666.369 2.633.262 5.214.816 7.762 1.5 1.857.498 3.676 1.143 5.518 1.703.185.056.456.051.607-.048 2.496-1.629 5.224-2.704 8.125-3.319 1.101-.233 2.237-.335 3.363-.407 1.369-.087 2.749-.167 4.115-.088 1.642.094 3.276.336 4.908.56.792.108 1.565.383 2.359.458.38.036.783-.242 1.185-.335 2.049-.473 4.089-1 6.156-1.374 1.539-.278 3.111-.409 4.676-.499 1.745-.1 3.503-.173 5.247-.089 2.205.106 4.394.42 6.555.923 2.677.623 5.245 1.528 7.686 2.784 1.824.938 3.558 2.026 5.119 3.364 1.023.878 2.07 1.745 2.994 2.723 1.14 1.206 2.303 2.413 3.018 3.958.538 1.165.922 2.371 1.028 3.647.132 1.586.292 3.178.277 4.766-.014 1.519-.221 3.037-.368 4.552-.334 3.454-1.085 6.833-1.997 10.167-.754 2.754-1.635 5.478-2.589 8.17-.879 2.481-1.893 4.917-2.918 7.343-.757 1.794-1.572 3.569-2.458 5.303-1.677 3.286-3.421 6.538-5.438 9.633-.348.535-.678 1.083-1.018 1.629.88.594 1.877.803 2.881.911.955.104 1.929.166 2.883.095 1.527-.113 3.049-.331 4.567-.544 1.504-.21 2.978-.638 4.522-.525 1.542.112 2.645 1.284 2.54 2.729zM97.833 74.413c-.655-.846-1.323-1.682-1.964-2.538-1.006-1.344-1.729-2.845-2.455-4.353-.688-1.429-1.532-2.782-2.257-4.195-1.265-2.465-2.553-4.922-3.718-7.435-1.465-3.157-2.62-6.426-2.984-9.923-.154-1.48-.193-2.958.106-4.424.479-2.341 1.702-4.172 3.758-5.428 1.907-1.165 4.032-1.541 6.209-1.659 1.351-.073 2.708-.013 4.11-.013l-.047-.237c-.872-1.823-1.687-3.677-2.641-5.457-1.346-2.512-3.068-4.777-4.986-6.877-1.421-1.555-2.96-2.998-4.646-4.273-1.658-1.255-3.405-2.376-5.269-3.293-2.223-1.093-4.538-1.938-6.967-2.477-2.334-.518-4.683-.835-7.077-.861-2.042-.022-4.071.07-6.06.531-3.002.695-5.748 1.931-8.137 3.933-1.334 1.118-2.498 2.373-3.517 3.77-1.196 1.643-2.161 3.417-2.986 5.277-1.132 2.552-1.909 5.208-2.44 7.938-.266 1.361-.474 2.734-.686 4.106-.074.48-.08.971-.123 1.521.369-.192.635-.34.907-.472l.885-.397c2.993-1.369 6.094-2.25 9.427-2.149 1.416.043 2.771.323 4.03.943 2.415 1.191 3.828 3.216 4.442 5.779.424 1.769.714 3.573.996 5.372.221 1.405.447 2.825.473 4.242.037 2.071-.068 4.146-.181 6.216-.096 1.764-.464 3.5-1.08 5.146-1.12 2.993-2.368 5.937-3.534 8.913-.385.983-.681 2.001-1.045 3.082.562 0 1.018-.004 1.474.002.178.003.36.008.532.049 1.34.316 2.502.923 3.455 1.954 1.271 1.372 1.938 2.973 1.972 4.826.019 1.027-.089 2.057-.084 3.084.021 4.786.057 9.572.097 14.357.007.782.046 1.565.102 2.346.117 1.635.235 3.271.395 4.902.112 1.157.268 2.312.451 3.461.259 1.628 1 3.077 1.841 4.462.724 1.191 1.665 2.203 2.905 2.901 2.107 1.186 4.376 1.285 6.663.848 1.545-.295 3.062-.769 4.562-1.258 1.479-.481 2.815-1.269 3.937-2.354 1.051-1.019 1.797-2.261 2.3-3.632.976-2.659 1.28-5.459 1.684-8.237.151-1.04.282-2.083.42-3.125.157-1.186.316-2.371.468-3.556.112-.883.214-1.768.322-2.651.154-1.268.317-2.535.464-3.804.113-.981.209-1.966.309-2.949.129-1.256.268-2.512.379-3.77.086-.955.051-1.927.22-2.864.311-1.718 1.123-3.18 2.646-4.125.637-.395 1.356-.655 2.063-.989l-.12-.186zM40.236 67.361c-.761-1.802-1.218-3.68-1.354-5.622-.128-1.825.089-3.643.276-5.46.182-1.76.333-3.528.386-5.296.088-2.906-.108-5.808-.247-8.712-.084-1.729.117-3.479.271-5.212.139-1.561.312-3.126.607-4.664.495-2.581 1.152-5.125 2.086-7.591.887-2.338 1.906-4.615 3.345-6.665.986-1.406 2.105-2.72 3.18-4.094l-.319-.113c-3.498-1.111-7.053-1.979-10.709-2.358-1.729-.179-3.464-.284-5.198-.387-.532-.032-1.072.04-1.606.091-1.322.126-2.66.176-3.961.424-2.214.421-4.338 1.129-6.305 2.282-1.766 1.035-3.249 2.373-4.491 3.978-1.372 1.772-2.295 3.776-2.958 5.913-.783 2.521-1.156 5.115-1.257 7.733-.088 2.295-.132 4.603.264 6.889.295 1.702.492 3.422.817 5.117.443 2.311.918 4.617 1.467 6.904.785 3.274 1.569 6.553 2.499 9.787.89 3.099 1.894 6.17 2.982 9.204.89 2.476 1.919 4.906 3.003 7.304.706 1.562 1.561 3.065 2.457 4.528.953 1.553 2.037 3.027 3.508 4.154 1.856 1.423 3.293 1.644 5.179.083.808-.669 1.491-1.495 2.194-2.282 1.117-1.25 2.195-2.534 3.307-3.788 1.416-1.598 2.85-3.179 4.273-4.769.301-.336.59-.682.883-1.022l-.484-.425c-1.769-1.699-3.139-3.669-4.095-5.931zM93.924 19.792c1.156 1.356 2.275 2.752 3.309 4.204 2 2.809 3.598 5.842 4.775 9.087.521 1.43.937 2.874.751 4.439-.129 1.096-.118 2.208-.215 3.31-.081.917-.226 1.829-.345 2.743-.178 1.378-.436 2.752-.513 4.136-.073 1.317.003 2.648.086 3.968.084 1.341.265 2.676.388 4.015.139 1.518.326 3.036.369 4.557.035 1.249-.076 2.506-.185 3.753-.13 1.502-.511 2.956-1.079 4.351-.399.982-.876 1.934-1.327 2.917l.181.192.275.213.277-.496c2.339-3.688 4.42-7.518 6.222-11.493 1.159-2.56 2.245-5.156 3.287-7.766 1.624-4.064 2.909-8.242 3.903-12.503.446-1.913.787-3.855 1.09-5.797.236-1.518.433-3.054.477-4.586.047-1.625-.043-3.263-.193-4.884-.112-1.224-.414-2.456-1.181-3.451-1.233-1.602-2.564-3.134-4.201-4.346-1.378-1.021-2.751-2.068-4.23-2.927-2.345-1.36-4.883-2.266-7.535-2.883-2.588-.603-5.21-.863-7.849-.918-1.556-.033-3.119.134-4.672.28-1.407.132-2.805.357-4.222.543 1.52.855 3.019 1.615 4.433 2.511 2.973 1.883 5.637 4.149 7.924 6.831zM55.299 72.514c.961-3.073 2.27-6.007 3.538-8.959 1.028-2.394 1.59-4.916 1.777-7.506.093-1.277.067-2.57.004-3.851-.071-1.423-.185-2.85-.392-4.259-.266-1.801-.569-3.603-.995-5.371-.462-1.913-1.627-3.245-3.623-3.736-1.216-.299-2.424-.287-3.653-.093-3.002.473-5.75 1.579-8.31 3.199-.515.326-.798.589-.709 1.328.188 1.565.229 3.155.222 4.735-.01 2.236-.105 4.472-.19 6.707-.028.728-.133 1.452-.211 2.177-.12 1.11-.351 2.219-.344 3.327.007 1.142.124 2.311.401 3.417.88 3.507 2.744 6.377 5.799 8.402 1.879 1.245 3.958 1.873 6.24 1.992.155-.524.293-1.019.446-1.509zm-3.586-30.087c-.402-.844-.172-1.543.76-1.867.227-.08.461-.165.697-.188.324-.032.654-.008.982-.008 1.182.006 2.319.171 3.295.923.626.482.794 1.122.389 1.779-.575.932-1.452 1.4-2.529 1.49-1.697.141-2.888-.65-3.594-2.129zM98.753 42.119c.136-1.124.245-2.251.384-3.375.056-.452-.182-.574-.561-.585-1.192-.033-2.384-.075-3.576-.097-1.344-.024-2.652.192-3.896.703-1.38.568-2.431 1.478-2.86 2.98-.32 1.12-.406 2.239-.293 3.41.172 1.785.568 3.517 1.193 5.176.834 2.221 1.707 4.441 2.75 6.569 1.413 2.881 3.012 5.67 4.513 8.507.401.757.738 1.547 1.156 2.431.875-1.853 1.302-3.708 1.351-5.622.041-1.61-.088-3.227-.182-4.838-.059-.986-.198-1.966-.294-2.95-.134-1.371-.337-2.741-.368-4.115-.031-1.397.068-2.802.188-4.197.113-1.338.334-2.665.495-3.997zm-2.689-1.082c-.443 1.223-1.39 1.913-2.618 2.116-1.145.188-2.148-.235-2.894-1.148-.531-.65-.328-1.42.468-1.859.914-.506 1.919-.634 3.104-.711.322.059.807.108 1.268.24.669.189.916.692.672 1.362zM60.642 78.697c-.655-.535-1.521-.566-2.144.021-.773.73-1.453 1.565-2.133 2.388-.785.951-1.521 1.94-2.534 2.677-1.474 1.071-3.192 1.515-4.919 1.935-1.373.334-2.752.644-4.129.965l-.017.178c.409.189.805.425 1.231.56 2.1.665 4.236.996 6.455.808 1.602-.136 3.128-.485 4.574-1.171 1.99-.943 3.521-2.437 4.823-4.175.218-.29.317-.719.343-1.093.089-1.321-.582-2.303-1.55-3.093zM112.393 79.223c-1.69.181-3.382.373-5.077.47-.818.047-1.648-.109-2.474-.176-1.385-.112-2.737-.42-3.908-1.16-.678-.427-1.241-.475-1.961-.233-1.028.346-1.867.872-2.115 1.986-.169.753-.23 1.533-.298 2.304-.013.136.157.386.287.42.793.209 1.59.456 2.401.529.996.09 2.01.061 3.013.011 1.083-.054 2.173-.124 3.24-.304 2.515-.422 4.948-1.11 7.109-2.536.779-.515 1.551-1.041 2.325-1.562l-.064-.11c-.826.123-1.648.273-2.478.361z"></path>
          </svg>,
          name:'Postgresql',          description:"lorem ipsum"
        },
        // react
        {
          svg: <svg fill="#67def7" viewBox="0 0 128 128">
            <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3-12.5 4.8-19.3 11.4-19.3 18.8s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zm-14.8-30.5c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zm-11.2 59.3c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zm-25.6 27.1c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zm25.6-27.1c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zm-54.5-16.2c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zm-24.7 29c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5-13.8-4-22.1-10-22.1-15.6zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zm60.8-20.3c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
          </svg>,
          name:'React',
          description:"lorem ipsum"
        },
        // ruby
        {
          svg: <svg viewBox="0 0 128 128">
            <path fillRule="evenodd" clipRule="evenodd" fill="#D91404" d="M35.971 111.33c27.466 3.75 54.444 7.433 81.958 11.188-9.374-15.606-18.507-30.813-27.713-46.144l-54.245 34.956zM125.681 24.947c-2.421 3.636-4.847 7.269-7.265 10.907-8.304 12.493-16.607 24.986-24.903 37.485-.462.696-1.061 1.248-.41 2.321 8.016 13.237 15.969 26.513 23.942 39.777 1.258 2.095 2.53 4.182 4.157 6.192 1.612-32.193 3.223-64.387 4.834-96.58l-.355-.102zM16.252 66.22c.375.355 1.311.562 1.747.347 7.689-3.779 15.427-7.474 22.948-11.564 2.453-1.333 4.339-3.723 6.452-5.661 6.997-6.417 13.983-12.847 20.966-19.278.427-.395.933-.777 1.188-1.275 2.508-4.902 4.973-9.829 7.525-14.898-3.043-1.144-5.928-2.263-8.849-3.281-.396-.138-1.02.136-1.449.375-6.761 3.777-13.649 7.353-20.195 11.472-3.275 2.061-5.943 5.098-8.843 7.743-4.674 4.266-9.342 8.542-13.948 12.882-1.222 1.152-2.336 2.468-3.288 3.854-3.15 4.587-6.206 9.24-9.402 14.025 1.786 1.847 3.41 3.613 5.148 5.259zM44.354 59.949c-3.825 16.159-7.627 32.227-11.556 48.823 18.423-11.871 36.421-23.468 54.3-34.987-14.228-4.605-28.41-9.196-42.744-13.836zM120.985 25.103c-15.566 2.601-30.76 5.139-46.15 7.71 5.242 12.751 10.379 25.246 15.662 38.096 10.221-15.359 20.24-30.41 30.488-45.806zM44.996 56.644c14.017 4.55 27.755 9.01 41.892 13.6-5.25-12.79-10.32-25.133-15.495-37.737-8.815 8.059-17.498 15.999-26.397 24.137zM16.831 75.643c-4.971 11.883-9.773 23.362-14.662 35.048 9.396-.278 18.504-.547 27.925-.825-4.423-11.412-8.759-22.6-13.263-34.223zM30.424 101.739l.346-.076c3.353-13.941 6.754-27.786 10.177-42.272-7.636 3.969-14.92 7.754-22.403 11.644 3.819 9.926 7.891 20.397 11.88 30.704zM115.351 22.842c-4.459-1.181-8.918-2.366-13.379-3.539-6.412-1.686-12.829-3.351-19.237-5.052-.801-.213-1.38-.352-1.851.613-2.265 4.64-4.6 9.245-6.901 13.868-.071.143-.056.328-.111.687 13.886-2.104 27.679-4.195 41.47-6.285l.009-.292zM89.482 12.288l36.343 10.054c-2.084-5.939-4.017-11.446-6.005-17.11l-30.285 6.715-.053.341zM33.505 114.007c-4.501-.519-9.122-.042-13.687.037-3.75.063-7.5.206-11.25.323-.386.012-.771.09-1.156.506 31.003 2.866 62.005 5.732 93.007 8.6l.063-.414c-9.938-1.357-19.877-2.714-29.815-4.07-12.384-1.691-24.747-3.551-37.162-4.982zM2.782 99.994c3.995-9.27 7.973-18.546 11.984-27.809.401-.929.37-1.56-.415-2.308-1.678-1.597-3.237-3.318-5.071-5.226-2.479 12.24-4.897 24.177-7.317 36.113l.271.127c.185-.297.411-.578.548-.897zM81.522 9.841c6.737-1.738 13.572-3.097 20.367-4.613.44-.099.87-.244 1.303-.368l-.067-.332c-9.571 1.287-19.141 2.575-29.194 3.928 2.741 1.197 4.853 2.091 7.591 1.385z"></path>
          </svg>,
          name:'Ruby',
          description: "A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write."
        },
        // ruby on rails
        {
          svg: <svg viewBox="0 0 128 128">
            <path fillRule="evenodd" clipRule="evenodd" fill="#A62C46" d="M109.682 14.737c-12.206-6.023-24.708-6.636-37.508-2.111-11.779 4.164-21.175 11.615-28.16 21.763-11.819 17.172-20.404 35.909-25.215 56.263-2.464 10.417-4.06 21.466-3.631 32.224.035.873.165 1.124.251 3.124h60.366c-.173-2-.287-1.416-.437-1.797-3.175-8.106-5.689-16.666-7.428-25.198-2.498-12.251-3.806-24.729-1.226-37.093 3.611-17.313 13.48-29.805 30.117-36.283 9.424-3.667 18.369-2.624 26.214 4.262.072.063.22.025.412.056l2.565-3.883c-4.94-4.703-10.368-8.389-16.32-11.327zM3.336 94.394c-.46 3.923-.89 7.596-1.34 11.451l11.132 1.336 2.039-11.893c-4.055-.307-7.906-.598-11.831-.894zM25.186 60.208l-10.471-4.097-3.384 9.607 10.671 3.42c1.08-3.031 2.096-5.882 3.184-8.93zM74.605 113.867c3.575.266 7.157.449 11.103.679-1.433-2.979-2.706-5.673-4.039-8.335-.146-.289-.639-.568-.974-.573-3.033-.044-6.068-.025-9.291-.025.726 2.628 1.357 5.053 2.096 7.443.111.361.707.782 1.105.811zM42.933 31.103l-7.955-5.268c-2.132 2.383-4.188 4.68-6.359 7.105l8.178 5.496 6.136-7.333zM68.267 84.472c-.013.321.276.832.558.959 2.865 1.288 5.76 2.515 8.912 3.873-.131-2.492-.219-4.575-.368-6.654-.027-.374-.203-.912-.48-1.066-2.631-1.456-5.299-2.847-8.216-4.395-.159 2.665-.321 4.972-.406 7.283zM65.91 12.3l-5.446-6.181-7.499 3.898c1.876 2.286 3.647 4.443 5.455 6.644l7.49-4.361zM69.325 61.476c-.163.374.052 1.167.373 1.456 2.175 1.962 4.424 3.84 6.926 5.981.573-2.4 1.113-4.539 1.571-6.693.081-.383-.032-1.016-.298-1.23-1.946-1.569-3.955-3.063-6.037-4.651-.915 1.815-1.802 3.443-2.535 5.137zM81.775 9.052c2.78.075 5.563.042 8.499.042-.293-2.044-.433-3.593-.782-5.092-.104-.446-.775-1.04-1.228-1.078-2.787-.226-5.585-.313-8.651-.459.409 2.063.721 3.881 1.162 5.668.093.379.647.909 1 .919zM85.16 44.727c.142-.266.178-.749.029-.981-1.366-2.137-2.785-4.241-4.254-6.455l-4.76 4.372 6.582 7.294c.884-1.539 1.675-2.868 2.403-4.23zM90.295 30.2l2.843 5.281c4.449-2.438 4.875-3.32 3.3-6.834l-6.143 1.553zM111.582 13.927c1.851 1.142 3.806 2.115 5.792 3.185l1.33-2.07c-2.422-1.771-4.76-3.484-7.413-5.426-.104 1.104-.259 1.875-.219 2.637.032.581.129 1.44.51 1.674zM109 30.646c2 .217 5 .424 7 .643v-2.718c-2-.438-5-.872-7-1.323v3.398z"></path>
          </svg>,
          name:'Ruby on Rails',
          description:"lorem ipsum"
        }
      ],
      info_click:false,
      info_dossier:{
        name:'',
        description:''
      },
      projects:[
        {
          id:1,
          name:"RPG Battle Simulation",
          description:"A battle sequence in the style of old school RPGs (Final Fantasy/turn-based) with a touch of modern mobage sensibilitieslorem ipsum",
          git:"https://git.generalassemb.ly/vdiaz1x/RPG-Battle-Sequence",
          web:"https://git.generalassemb.ly/pages/vdiaz1x/RPG-Battle-Sequence/",
          author: "self",
        },
        {
          id:2,
          name: "Anime Database",
          description: "Database to track user's anime favorites and search anime info",
          git:"https://git.generalassemb.ly/vdiaz1x/Anime-Database",
          web: "https://animedatabase.herokuapp.com",
          author: "self",
        },
        {
          id:3,
          name: "Crypto App",
          description: "Crypto information aggregator and coin tracker",
          git:"https://git.generalassemb.ly/Group1/CryptoApp",
          web: "https://mysterious-castle-71126.herokuapp.com",
          author: "self",
        },
        {
          id: 4,
          name: "TBD",
          description: "lorem ipsum",
          git:"TBD",
          web: "TBD",
          author: "self",
        },
      ]
    }

    // bindings
    this.tech_item_info = this.tech_item_info.bind(this)
  }

  // functions
  tech_item_info(name, description){
    this.setState(prevState => ({
      info_click:!prevState.info_click,
      info_dossier:{
        name,
        description
      }
    }))
  }

  render() {
    return (
     <div>
     <Header />
     <Projects
        projects={this.state.projects}
      />
      <Tech
        icons={this.state.icons}
        info={this.tech_item_info}
        toggle={this.state.info_click}
        dossier={this.state.info_dossier}
      />
      <AboutMe />
      <Contact />
      <Footer />
     </div>
    );
  }
}

export default App;
