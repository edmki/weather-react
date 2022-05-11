import { useState, useEffect, useRef } from 'react';

function HorizontalScroll(props) {
    const ref = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [clientX, setClientX] = useState(0);
    const [scrollX, setScrollX] = useState(0);

    useEffect(() => {
        window.addEventListener("mouseup", onMouseUp);

        return () => {
            window.removeEventListener("mouseup", onMouseUp);
        };
    }, []);

    useEffect(() => {
        window.addEventListener("toutchend", onMouseUp);

        return () => {
            window.removeEventListener("toutchend", onMouseUp);
        };
    }, []);

    const onMouseDown = function (e) {
        const newClientX = e.touches ? e.touches[0].clientX : e.clientX;
        setIsDragging(true);
        setClientX(newClientX);
        setScrollX(ref.current.scrollLeft);
    }


    const onMouseUp = function (e) {
        setIsDragging(false);
    }

    const onMouseMove = function (e) {
        const newClientX = e.touches ? e.touches[0].clientX : e.clientX;
        if (isDragging) {
            ref.current.scrollLeft = scrollX + clientX - newClientX;
        }
    }

    const onWheel = function (e) {
        const delta = Math.sign(e.deltaY)
        ref.current.scrollLeft += delta * 20;
    }

    return (
        <div ref={ref} className={props.className} style={{ overflow: "hidden", cursor: "pointer", userSelect: "none" }} onMouseDown={onMouseDown} onMouseMove={onMouseMove} onWheel={onWheel} onTouchStart={onMouseDown} onTouchMove={onMouseMove}>
            {props.children}
        </div>
    );
}

export default HorizontalScroll;