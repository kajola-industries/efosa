const LogoFull = (props) => {
    const { height, width, display = "block" } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill="none"
            viewBox="0 0 251 43"
            className={display}
        >
            <path
                fill="#fff"
                d="M86.629 42.362c-2.165 0-4.177-.285-6.037-.855a16.486 16.486 0 01-5.012-2.562c-1.481-1.178-2.81-2.62-3.987-4.329l4.214-4.841c1.86 2.658 3.645 4.5 5.354 5.525 1.709 1.025 3.74 1.537 6.094 1.537 1.443 0 2.753-.228 3.93-.683 1.177-.456 2.107-1.082 2.79-1.88.684-.797 1.026-1.708 1.026-2.733a5.47 5.47 0 00-.342-1.937 4.616 4.616 0 00-1.082-1.652c-.455-.493-1.063-.949-1.822-1.367-.722-.417-1.576-.778-2.563-1.082-.987-.341-2.127-.626-3.418-.854-2.05-.418-3.835-.968-5.353-1.652-1.52-.683-2.791-1.537-3.816-2.563-1.025-1.025-1.785-2.183-2.278-3.474-.494-1.329-.74-2.81-.74-4.442 0-1.595.34-3.076 1.024-4.443a11.313 11.313 0 012.905-3.53c1.253-1.026 2.715-1.804 4.385-2.336 1.671-.57 3.475-.854 5.411-.854 2.05 0 3.93.265 5.639.797 1.708.532 3.227 1.329 4.556 2.392 1.329 1.025 2.43 2.297 3.303 3.816l-4.328 4.272c-.76-1.253-1.614-2.297-2.563-3.133a9.364 9.364 0 00-3.133-1.936 9.723 9.723 0 00-3.645-.684c-1.48 0-2.771.228-3.873.684-1.1.455-1.974 1.1-2.62 1.936-.607.797-.91 1.747-.91 2.848 0 .797.151 1.538.455 2.221.304.646.76 1.234 1.367 1.766.645.493 1.5.949 2.563 1.367 1.063.38 2.335.721 3.816 1.025 2.088.455 3.949 1.044 5.581 1.765 1.633.684 3.019 1.5 4.158 2.45 1.139.949 1.993 2.012 2.563 3.189a8.205 8.205 0 01.911 3.816c0 2.544-.588 4.746-1.766 6.607-1.176 1.86-2.847 3.303-5.011 4.328-2.165.987-4.747 1.48-7.746 1.48zM109.868 41.792V1.924H126.1c2.164 0 4.119.55 5.866 1.652 1.784 1.063 3.208 2.525 4.271 4.385 1.064 1.86 1.595 3.93 1.595 6.208 0 2.279-.531 4.348-1.595 6.208a12.772 12.772 0 01-4.271 4.5c-1.747 1.101-3.702 1.652-5.866 1.652h-10.081v15.263h-6.151zm6.151-21.187h9.967a4.84 4.84 0 002.79-.854 6.61 6.61 0 001.994-2.335c.531-.987.797-2.07.797-3.247s-.266-2.24-.797-3.189c-.494-.95-1.158-1.709-1.994-2.278a4.84 4.84 0 00-2.79-.855h-9.967v12.758zM145.965 41.792V1.924h25.117v5.923h-18.966V35.87h18.966v5.923h-25.117zm2.79-17.485v-5.923h19.194v5.923h-19.194zM197.124 42.362c-2.771 0-5.315-.494-7.632-1.481a17.695 17.695 0 01-6.037-4.215c-1.708-1.86-3.037-4.043-3.986-6.55-.912-2.505-1.367-5.258-1.367-8.258 0-2.848.493-5.486 1.48-7.916 1.026-2.468 2.43-4.633 4.215-6.493a19.08 19.08 0 016.208-4.329c2.354-1.025 4.898-1.538 7.632-1.538 1.936 0 3.816.304 5.638.912 1.861.57 3.532 1.386 5.012 2.449 1.519 1.025 2.753 2.202 3.703 3.531l-4.101 4.271c-1.101-1.1-2.221-2.012-3.361-2.733a13.088 13.088 0 00-3.417-1.709 10.918 10.918 0 00-3.474-.57c-1.861 0-3.607.361-5.24 1.083a12.883 12.883 0 00-4.214 2.904c-1.178 1.253-2.108 2.753-2.791 4.5-.684 1.708-1.025 3.588-1.025 5.638 0 2.165.322 4.139.968 5.924.683 1.746 1.633 3.246 2.848 4.499a12.593 12.593 0 004.328 2.905c1.709.645 3.588.968 5.639.968 1.253 0 2.487-.171 3.702-.513a13.693 13.693 0 003.417-1.48 15.41 15.41 0 002.905-2.279l3.075 5.012c-.873 1.025-2.069 1.956-3.588 2.791-1.481.835-3.152 1.5-5.012 1.993a22.7 22.7 0 01-5.525.684zM235.78 42.362c-2.772 0-5.316-.494-7.632-1.481a17.695 17.695 0 01-6.037-4.215c-1.709-1.86-3.038-4.043-3.987-6.55-.911-2.505-1.367-5.258-1.367-8.258 0-2.848.494-5.486 1.481-7.916 1.025-2.468 2.43-4.633 4.215-6.493a19.07 19.07 0 016.208-4.329c2.354-1.025 4.898-1.538 7.632-1.538 1.936 0 3.816.304 5.638.912 1.861.57 3.531 1.386 5.012 2.449 1.519 1.025 2.753 2.202 3.702 3.531l-4.101 4.271c-1.101-1.1-2.221-2.012-3.36-2.733a13.088 13.088 0 00-3.417-1.709 10.918 10.918 0 00-3.474-.57c-1.861 0-3.608.361-5.24 1.083-1.595.683-3 1.651-4.215 2.904-1.177 1.253-2.107 2.753-2.791 4.5-.683 1.708-1.025 3.588-1.025 5.638 0 2.165.323 4.139.968 5.924.684 1.746 1.633 3.246 2.848 4.499a12.597 12.597 0 004.329 2.905c1.708.645 3.588.968 5.638.968 1.253 0 2.487-.171 3.702-.513a13.693 13.693 0 003.417-1.48 15.346 15.346 0 002.905-2.279l3.076 5.012c-.874 1.025-2.07 1.956-3.588 2.791-1.481.835-3.152 1.5-5.012 1.993a22.7 22.7 0 01-5.525.684z"
            ></path>
            <path
                fill="#1963B0"
                d="M29.233 14.335h14.2V.135h-14.2v14.2z"
            ></path>
            <path
                fill="#2EA5E9"
                d="M29.233 28.535h14.2v-14.2h-14.2v14.2z"
            ></path>
            <path
                fill="#62D9FF"
                d="M15.034 28.535h14.2v-14.2h-14.2v14.2z"
            ></path>
            <path
                fill="#6663FF"
                d="M15.034 42.737h14.2v-14.2h-14.2v14.2z"
            ></path>
            <path
                fill="#4C41CA"
                d="M29.233 42.737h14.2v-14.2h-14.2v14.2z"
            ></path>
            <path fill="#ADABFF" d="M.833 42.737h14.2v-14.2H.833v14.2z"></path>
        </svg>
    );
};

export default LogoFull;
