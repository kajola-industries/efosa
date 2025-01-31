const ChevronBottomIcon = ({ firstColor, width, height, rotation = 0, ...props }) => {
    return (
        <svg
            width={width || "8"}
            height={height || "5"}
            viewBox="0 0 8 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: `rotate(${rotation}deg)` }}
        >
            <path
                d="M6.5 1L4 3.5L1.5 1"
                stroke={firstColor || "#808080"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default ChevronBottomIcon;
