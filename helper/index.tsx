import { KeyboardEvent, useEffect, useRef, useState } from "react";

export const smoothScroll = (elementId: string, headerHeight: number) => {
	const scrollElement = document.getElementById(elementId)?.offsetTop || 0;
	window.scrollTo({ top: scrollElement-headerHeight, behavior: 'smooth'});
}

export const redirectToNewPage = (url: string, isNewTab?: boolean) => {
	const link = document.createElement("a");
	link.href = url
	if(isNewTab) link.target = "_blank"
	link.click()
	link.remove()
}

export const useDetectClickOut = <T extends HTMLElement,U extends HTMLElement>(initState: boolean) => {
	const triggerRef = useRef<U>(null);
	const nodeRef = useRef<T>(null);
	
	const [show, setShow] = useState<boolean>(initState);
 	const handleClickOutside = (event: MouseEvent) => {

		const trigger = triggerRef.current?.contains(event.target as Node | null)
		const node = nodeRef.current?.contains(event.target as Node | null)

		if(trigger && !node) {
			if(show) setShow(false)
			else setShow(true)
		}
		else if(!trigger && node) setShow(false)
		else if(!trigger && !node) setShow(false)
		else setShow(false)
	};
	const firstInit = () => {
		document.addEventListener("click", (evt) => handleClickOutside(evt), true);
		return () => {
			document.removeEventListener("click", (evt) => handleClickOutside(evt), true);
		};
	}
 	useEffect(firstInit,[]);
 	return {
		triggerRef,
		nodeRef,
		show,
		setShow
	}
}

export const replaceAlphabetInDigits = (val: string) =>{
	return val.replace(/[^\d,]+/g, '');
}

export const numFormatter = (n: string | number | bigint, decimalSymbol?: string) => {
	if(Number(n) > 0) {
    const splitNumber = String(n).split(decimalSymbol || ".")
    if(splitNumber.length > 1) return splitNumber[0].replace(/(.)(?=(\d{3})+$)/g,'$1.') + `,${splitNumber[1]}`
    else return String(n).replace(/(.)(?=(\d{3})+$)/g,'$1.')
  }
  else {
    const splitNumber = String(Number(n) * -1).split(decimalSymbol || ".")
    if(splitNumber.length > 1) return "-" + splitNumber[0].replace(/(.)(?=(\d{3})+$)/g,'$1.') + `,${splitNumber[1]}`
    else return String(n).replace(/(.)(?=(\d{3})+$)/g,'$1.')
  }
}

export const onKeyPressHandler = (evt: KeyboardEvent<HTMLInputElement>) => {
	const allowedKeys = ["1","2","3","4","5","6","7","8","9","0","Delete","Backspace","ArrowLeft","ArrowUp","ArrowDown","ArrowRight"]
	const finder = allowedKeys.find(key => key === evt.key)
	
	if(!finder) evt.preventDefault()
}

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const debounce = <T extends (...args: any) => any>(func: T, wait?: number) => {
	let timeout: NodeJS.Timeout | number | undefined;
	return (...args: any) => {
	  const later = () => {
		timeout = undefined;
		
		func(...args);
	  };
	  clearTimeout(timeout as number | undefined);
	  
	  timeout = setTimeout(later, wait);
	};
  };

// Hook func vers.
export const useDebounce = <T extends (...args: any) => any>(func: T, args: Array<any>, wait?: number, funcBeforeDebounce?: () => void) => {
	const debounceProcess = useRef(debounce(func, wait))

	const listener = () => {
		if (funcBeforeDebounce) funcBeforeDebounce()
		debounceProcess.current(...args)
	}

	useEffect(listener, [...args])
}

export const convertDate = (dateInit: string)=>{
	if (dateInit.includes('T')){
		let date = dateInit.split('T')[0]
		let time = dateInit.split('T')[1].split('.')[0]
		return date + " || " + time
	}
	return ''
}

export const textTrunc = (text:string,length:number)=>{
	let tempText:string
        if (text.length > length){
            tempText = text.substring(0,length) + '...'
            return tempText
        }
        return text
}