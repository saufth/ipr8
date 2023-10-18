import * as React from 'react'
import {
  IconMoonStars,
  IconSunHigh
} from '@tabler/icons-react'

type IconProps = React.HTMLAttributes<SVGElement>

interface CustomIconProps extends IconProps {
  color?: 'primary' | 'secondary'
}

export const Icons = {
  MoonStar: IconMoonStars,
  Sun: IconSunHigh,
  Logotype: (props: IconProps) => {
    return (
      <svg
        width={512}
        height={512}
        viewBox='0 0 512 512'
        {...props}
      >
        <g>
          <path d='m325.77,370.13l32.67,39.89h17.75l-95.47-118.03h-18.71l43.2,53.98h-56.07c-6.73,0-12.18-5.46-12.18-12.18v-46.83h41.65c26.94,0,47.3-6.22,61.08-18.66,13.77-12.44,20.66-29.19,20.66-50.25s-6.89-37.74-20.66-50.07c-13.78-12.32-34.14-18.48-61.08-18.48h-41.65v-13.9c0-9.81,7.95-17.77,17.77-17.77h69.31v-10.8h-190.71v10.8h69.31c9.81,0,17.77,7.95,17.77,17.77v13.9h-91.4v12.23h21.64c9.11,0,16.5,7.39,16.5,16.5v167.73h-33.1v10.8h33.1v20.7c0,6.46-5.23,11.69-11.69,11.69h-26.45v10.8h92.84v-10.8h-26.45c-6.46,0-11.69-5.23-11.69-11.69v-20.7h114.48c10.76,0,20.92,4.93,27.59,13.37Zm-47.12-208.4c10.91,0,20.38,1.32,28.41,3.95,8.03,2.63,14.7,6.16,20,10.58,5.3,4.43,9.24,9.63,11.82,15.6,2.57,5.98,3.86,12.2,3.86,18.65v15.78c0,6.7-1.29,13.04-3.86,19.01-2.58,5.98-6.52,11.18-11.82,15.6-5.31,4.43-11.98,7.95-20,10.58-8.03,2.63-17.5,3.95-28.41,3.95h-41.69v-113.71h41.69Zm-78.44,0h20.92v113.71h-37.42v-97.2c0-9.11,7.39-16.5,16.5-16.5Zm5.62,125.22h15.3v47.55c0,6.73-5.46,12.18-12.18,12.18h-25.24v-37.61c0-12.22,9.9-22.12,22.12-22.12Zm128.34-153.6l3.82-26.22,3.36,1.76-2.08,13.02-1.57,9.85.19.1,7.23-6.88,9.55-9.09,3.24,1.71-19.43,18.01-4.3-2.26Zm14.36,8.26l1.61-1.77,5.49,4.99,13.58-14.94-5.49-4.99,1.61-1.77,13.62,12.38-1.61,1.77-5.49-4.99-13.58,14.94,5.49,4.99-1.61,1.77-13.62-12.38Zm16.22,15.39l1.99-1.34,4.13,6.16,16.76-11.24-4.13-6.16,1.99-1.34,10.25,15.29-1.99,1.34-4.13-6.16-16.76,11.24,4.13,6.16-1.99,1.34-10.25-15.29Zm12.04,18.8l2.25-.81,2.52,6.97,18.98-6.86-2.52-6.97,2.26-.81,6.26,17.31-2.26.81-2.52-6.97-18.98,6.86,2.52,6.97-2.25.81-6.26-17.31Z' />
          <g>
            <g>
              <path d='m2.32,314.49c-.7-3.16-.25-5.72,1.33-7.69,1.59-1.97,4.19-3.35,7.82-4.16,3.63-.8,6.57-.65,8.84.47,2.27,1.12,3.75,3.25,4.45,6.41.26,1.18.35,2.24.28,3.16-.08.92-.28,1.74-.6,2.46-.32.72-.72,1.35-1.19,1.9-.48.54-.97,1.04-1.48,1.49l-1.62-2.44c.43-.33.82-.69,1.18-1.08.36-.39.65-.82.89-1.3.23-.48.38-1.02.44-1.61.06-.6,0-1.29-.17-2.08-.45-2.05-1.44-3.43-2.97-4.14-1.53-.71-3.38-.82-5.55-.34l-3.54.78c-2.18.48-3.81,1.37-4.89,2.65-1.09,1.29-1.4,2.95-.95,5,.17.79.42,1.44.72,1.95.31.51.67.94,1.08,1.27.41.34.86.61,1.35.81.49.2,1,.36,1.52.48l-.44,2.89c-.67-.19-1.33-.43-1.99-.72-.65-.3-1.27-.7-1.87-1.22-.59-.52-1.12-1.18-1.58-1.98-.46-.8-.82-1.8-1.08-2.98Z' />
              <path d='m8.67,337.7c-.5-1.54-.68-2.94-.54-4.21.14-1.27.55-2.41,1.25-3.43.7-1.02,1.66-1.92,2.91-2.7,1.24-.77,2.73-1.44,4.47-2.01,1.72-.56,3.31-.89,4.78-.99,1.47-.11,2.79.05,3.95.47,1.16.42,2.17,1.1,3.02,2.05.85.94,1.53,2.19,2.03,3.72.5,1.54.68,2.94.54,4.21-.14,1.26-.55,2.41-1.25,3.43-.7,1.02-1.67,1.92-2.92,2.7-1.25.78-2.74,1.44-4.45,2-1.74.56-3.34.89-4.8,1-1.46.1-2.77-.06-3.94-.48-1.16-.42-2.17-1.1-3.02-2.05-.85-.95-1.53-2.19-2.03-3.73Zm2.21-.72c.33,1.01.77,1.81,1.33,2.4.56.59,1.21,1.01,1.97,1.27.75.26,1.59.35,2.52.28.93-.07,1.92-.28,2.99-.63l3.45-1.12c1.05-.34,1.97-.75,2.78-1.24.8-.48,1.43-1.06,1.89-1.71.46-.65.74-1.38.85-2.19.11-.81,0-1.71-.33-2.72-.33-1.01-.77-1.81-1.33-2.4-.56-.59-1.22-1.01-1.97-1.27-.75-.26-1.6-.35-2.53-.28-.93.08-1.93.29-2.98.63l-3.45,1.12c-1.07.35-2,.76-2.79,1.24-.79.48-1.42,1.05-1.87,1.7-.46.65-.74,1.38-.85,2.19-.11.8,0,1.71.33,2.72Z' />
              <path d='m33.12,349.09l-.11-.24-17.15,7.49-1.15-2.64,20.36-8.89,1.81,4.13-13.54,15.75.11.24,17.15-7.49,1.15,2.64-20.36,8.89-1.81-4.13,13.54-15.76Z' />
              <path d='m28.91,384.09c-1.16-2.07-1.78-3.95-1.88-5.64-.09-1.69.12-3.24.64-4.66l2.52,1.24c-.44,1.43-.61,2.78-.51,4.04.1,1.26.54,2.59,1.31,3.98.94,1.68,1.97,2.77,3.11,3.3,1.14.52,2.29.46,3.45-.19.94-.52,1.49-1.25,1.66-2.19.17-.93-.08-2.25-.75-3.97l-1.08-2.78c-.46-1.22-.74-2.3-.83-3.25-.09-.95-.03-1.78.18-2.51.21-.73.55-1.35,1-1.86.45-.51.99-.94,1.6-1.29,1.78-1,3.51-1.05,5.2-.17,1.68.88,3.19,2.5,4.51,4.86,1.03,1.85,1.64,3.56,1.83,5.12.18,1.56.02,2.99-.5,4.3l-2.51-1.16c.34-1.03.49-2.13.43-3.28-.06-1.15-.49-2.45-1.29-3.88-.88-1.57-1.82-2.61-2.84-3.14-1.02-.53-2.08-.49-3.19.13-.87.48-1.39,1.19-1.59,2.12-.19.93.05,2.28.72,4.05l1.03,2.68c.46,1.22.74,2.31.84,3.26.1.96.05,1.8-.15,2.54-.2.73-.53,1.36-.99,1.88-.46.52-1.01.96-1.64,1.31-1.8,1.01-3.6,1.09-5.4.26-1.8-.83-3.42-2.53-4.87-5.11Z' />
              <path d='m60.22,395.77l-16.31,11.4-1.82-2.61,16.31-11.4-5.06-7.24,1.91-1.33,11.94,17.08-1.91,1.33-5.06-7.24Z' />
              <path d='m55.49,422.36l-2.07-2.42,16.87-14.46,6.26,7.31c1.59,1.86,2.38,3.65,2.37,5.36-.01,1.71-.79,3.22-2.32,4.53-1.37,1.17-2.83,1.69-4.37,1.55-1.55-.14-3.07-.96-4.58-2.46l-2.91,11.38-2.32-2.7,3.01-11.06-2.74-3.19-7.2,6.17Zm13.06-2.81c.87,1.02,1.76,1.62,2.67,1.82.91.2,1.76-.04,2.55-.71l1.26-1.08c.79-.68,1.15-1.48,1.1-2.41-.06-.93-.52-1.91-1.39-2.92l-4.14-4.83-6.19,5.3,4.14,4.83Z' />
              <path d='m87.43,424.57l-9.25,9.61c-.75.78-1.39,1.5-1.93,2.17-.53.66-.89,1.33-1.08,1.99-.18.66-.13,1.35.15,2.06.28.71.86,1.5,1.76,2.35.89.86,1.7,1.41,2.42,1.67.72.25,1.41.27,2.07.07.66-.21,1.3-.59,1.95-1.15.64-.56,1.34-1.23,2.09-2.01l9.25-9.61,2.29,2.21-8.81,9.15c-1.15,1.19-2.22,2.17-3.21,2.92s-1.99,1.23-2.99,1.41c-1,.18-2.04.05-3.12-.42-1.08-.46-2.26-1.32-3.56-2.56-1.29-1.24-2.19-2.4-2.69-3.46-.51-1.06-.69-2.09-.54-3.1.15-1.01.58-2.02,1.3-3.04.72-1.02,1.65-2.12,2.8-3.32l8.81-9.15,2.29,2.21Z' />
              <path d='m95.01,461.44c-2.53-2.01-3.81-4.28-3.82-6.8-.01-2.53,1.14-5.25,3.44-8.16,2.31-2.91,4.69-4.65,7.16-5.21s4.96.16,7.5,2.17c.95.75,1.69,1.51,2.21,2.28.52.77.88,1.53,1.09,2.29.2.76.29,1.5.27,2.22-.03.72-.1,1.42-.21,2.09l-2.79-.87c.12-.52.2-1.05.24-1.58.03-.53-.01-1.05-.13-1.57-.12-.52-.35-1.03-.67-1.53-.33-.5-.81-1.01-1.44-1.51-1.64-1.3-3.28-1.75-4.91-1.34s-3.14,1.49-4.53,3.24l-2.25,2.84c-1.38,1.75-2.09,3.46-2.12,5.14-.03,1.68.78,3.18,2.42,4.48.63.5,1.23.86,1.79,1.06.56.2,1.11.31,1.64.31.53,0,1.05-.07,1.56-.23.51-.15,1-.35,1.48-.59l1.49,2.52c-.64.28-1.31.51-2,.69-.69.18-1.43.26-2.22.23-.78-.03-1.61-.21-2.47-.54-.86-.33-1.77-.88-2.72-1.63Z' />
              <path d='m115.03,475.74c-2.71-1.76-4.19-3.9-4.44-6.42-.25-2.52.64-5.33,2.66-8.44,2.02-3.11,4.24-5.07,6.63-5.86,2.4-.79,4.95-.31,7.66,1.45,1.02.66,1.82,1.35,2.41,2.06.59.71,1.02,1.44,1.3,2.17.27.74.43,1.47.48,2.19.04.72.04,1.42,0,2.1l-2.86-.61c.07-.53.11-1.06.09-1.6-.02-.53-.11-1.05-.28-1.55-.17-.5-.44-.99-.82-1.46-.37-.47-.9-.93-1.58-1.37-1.76-1.14-3.43-1.43-5.02-.87s-2.99,1.78-4.2,3.65l-1.98,3.04c-1.21,1.87-1.76,3.64-1.63,5.32.13,1.68,1.07,3.09,2.83,4.23.68.44,1.31.74,1.89.89.58.15,1.13.2,1.66.15.53-.05,1.04-.17,1.53-.37.49-.2.97-.44,1.42-.73l1.71,2.37c-.61.34-1.25.63-1.92.88-.67.25-1.4.39-2.18.44-.78.05-1.62-.06-2.51-.31-.89-.25-1.85-.71-2.86-1.37Z' />
              <path d='m128.05,483.32l.99-1.89,5.84,3.07,8.35-15.89-5.84-3.07.99-1.89,14.49,7.62-.99,1.89-5.84-3.07-8.35,15.89,5.84,3.07-.99,1.89-14.49-7.62Z' />
              <path d='m156.59,497.54c-1.49-.62-2.68-1.39-3.55-2.32-.87-.92-1.48-1.98-1.8-3.18-.33-1.19-.38-2.51-.16-3.96.22-1.45.68-3.02,1.37-4.7.69-1.67,1.47-3.09,2.35-4.28.87-1.19,1.85-2.09,2.92-2.7,1.07-.61,2.25-.93,3.52-.97,1.27-.04,2.66.26,4.15.88,1.49.62,2.68,1.39,3.55,2.32.87.93,1.48,1.98,1.8,3.18.33,1.19.38,2.52.16,3.98-.22,1.46-.68,3.02-1.37,4.69-.7,1.69-1.49,3.12-2.36,4.3-.87,1.18-1.84,2.07-2.92,2.68-1.07.61-2.25.93-3.52.97-1.27.04-2.66-.26-4.15-.87Zm.89-2.15c.98.41,1.87.59,2.69.54.81-.04,1.56-.27,2.25-.67s1.3-.98,1.85-1.73c.54-.75,1.03-1.65,1.46-2.68l1.39-3.35c.42-1.02.71-1.99.86-2.92.15-.93.13-1.77-.07-2.55-.2-.77-.57-1.46-1.11-2.06-.54-.6-1.3-1.11-2.28-1.52s-1.88-.59-2.69-.55c-.81.04-1.56.27-2.25.67-.69.4-1.3.99-1.85,1.75-.55.76-1.03,1.65-1.45,2.67l-1.39,3.35c-.43,1.04-.72,2.02-.87,2.93-.15.92-.12,1.76.08,2.53.2.77.57,1.46,1.11,2.06.54.6,1.3,1.11,2.28,1.52Zm8.7-20.31l-1.53-1.46,5.05-3.77,2.13,2.09-5.65,3.14Z' />
              <path d='m181.13,486.33l-.26-.08-5.44,17.91-2.76-.84,6.46-21.26,4.31,1.31,3.19,20.53.25.08,5.44-17.91,2.75.84-6.46,21.26-4.31-1.31-3.19-20.53Z' />
              <path d='m256.65,510.95c-1.69,0-2.89-.3-3.58-.94-.7-.63-1.05-1.42-1.05-2.35v-.89c0-.93.33-1.72,1.03-2.36.69-.64,1.88-.96,3.57-.97,1.69,0,2.89.31,3.59.94.7.63,1.05,1.42,1.05,2.35v.89c0,.93-.33,1.72-1.03,2.36-.69.64-1.88.96-3.58.97Z' />
              <path d='m326.85,495.45l-1.84-6.79-.29.08-2.39,12.49-8.36-9.57-.29.08,1.84,6.79,2.91,10.75-2.82.76-5.81-21.44,3.95-1.07,7.06,8.24.22-.06,1.93-10.68,3.8-1.03,5.81,21.44-2.82.76-2.91-10.75Z' />
              <path d='m353.59,497.86l-4.32-5.15-8.69,3.26.13,6.72-3.09,1.16-.21-23.65,3.94-1.48,15.39,17.96-3.16,1.18Zm-12.95-15.8l-.32.12.29,11.35,7.27-2.73-7.24-8.74Z' />
              <path d='m356.64,476.17l-.24.12,8.18,16.83-2.59,1.26-9.71-19.98,4.05-1.97,16.29,12.89.24-.12-8.18-16.83,2.59-1.26,9.71,19.98-4.05,1.97-16.29-12.89Z' />
              <path d='m381.81,461.3l10.34,17-2.72,1.65-10.34-17-7.54,4.59-1.21-1.99,17.81-10.83,1.21,1.99-7.54,4.59Z' />
              <path d='m404.35,470.43l-13.26-17.82,13.07-9.73,1.39,1.86-10.52,7.83,4.46,6,10.15-7.56,1.39,1.86-10.15,7.56,4.64,6.23,10.52-7.83,1.39,1.86-13.07,9.73Z' />
              <path d='m412.29,440.57l-.2.18,12.47,13.96-2.15,1.92-14.8-16.57,3.36-3,19.19,7.95.2-.18-12.46-13.96,2.15-1.92,14.8,16.57-3.36,3-19.19-7.95Z' />
              <path d='m439.51,440.96l-1.56-1.46,4.51-4.81-13.09-12.28-4.51,4.81-1.56-1.46,11.2-11.94,1.56,1.46-4.51,4.81,13.09,12.28,4.51-4.81,1.55,1.46-11.2,11.94Z' />
              <path d='m455.1,405.83l-5.54-4.34-.19.24,5.57,11.43-12.43-2.66-.19.24,5.54,4.34,8.77,6.87-1.8,2.3-17.5-13.7,2.52-3.22,10.59,2.37.14-.18-4.85-9.71,2.43-3.1,17.5,13.69-1.8,2.3-8.77-6.87Z' />
              <path d='m469.29,405.29l-1.79-1.16,3.59-5.53-15.06-9.77-3.59,5.53-1.79-1.16,8.91-13.74,1.79,1.16-3.59,5.53,15.06,9.77,3.59-5.53,1.79,1.16-8.91,13.73Z' />
              <path d='m481.58,385.77l-19.63-10.41,7.64-14.39,2.05,1.09-6.14,11.58,6.61,3.51,5.93-11.18,2.05,1.09-5.93,11.18,6.86,3.64,6.14-11.58,2.05,1.09-7.63,14.39Z' />
              <path d='m475.96,355.39l-.1.24,17.25,7.27-1.12,2.65-20.47-8.63,1.75-4.16,20.75-1.04.1-.24-17.25-7.27,1.12-2.65,20.47,8.63-1.75,4.15-20.75,1.04Z' />
              <path d='m485.09,327.62l18.97,5.98-.96,3.04-18.97-5.98-2.65,8.42-2.22-.7,6.27-19.88,2.21.7-2.65,8.42Z' />
              <path d='m510.02,312.37c-.34,1.58-.89,2.88-1.65,3.91-.75,1.03-1.69,1.8-2.8,2.34-1.11.53-2.4.82-3.87.87-1.46.04-3.09-.13-4.87-.52-1.76-.38-3.31-.9-4.63-1.55-1.33-.65-2.38-1.45-3.18-2.4-.79-.95-1.32-2.04-1.58-3.29-.26-1.25-.22-2.66.12-4.24.34-1.58.89-2.88,1.65-3.91.75-1.02,1.69-1.8,2.8-2.34,1.12-.53,2.41-.82,3.88-.86,1.47-.04,3.09.13,4.86.51,1.78.39,3.33.9,4.65,1.55,1.31.65,2.37,1.45,3.16,2.39.79.95,1.32,2.04,1.58,3.29.26,1.25.22,2.66-.12,4.24Zm-2.27-.49c.22-1.04.24-1.95.06-2.74-.19-.79-.54-1.49-1.06-2.09-.52-.6-1.2-1.11-2.03-1.51-.84-.4-1.8-.72-2.9-.96l-3.55-.77c-1.08-.23-2.09-.34-3.02-.33-.94.02-1.77.19-2.49.52-.72.33-1.34.82-1.83,1.46s-.86,1.48-1.08,2.52c-.22,1.04-.24,1.95-.06,2.74.19.79.54,1.49,1.06,2.09.52.6,1.21,1.11,2.05,1.51.85.4,1.81.72,2.89.96l3.55.77c1.1.24,2.11.35,3.04.33.93-.02,1.75-.19,2.48-.53.72-.33,1.34-.82,1.83-1.46s.86-1.48,1.08-2.52Z' />
            </g>
            <g>
              <path d='m12.62,258.97c-.03,1.88-.4,3.19-1.11,3.95-.71.76-1.57,1.13-2.6,1.11l-.98-.02c-1.02-.02-1.88-.42-2.56-1.2-.69-.78-1.01-2.11-.98-3.99.03-1.88.4-3.19,1.11-3.95.71-.76,1.57-1.13,2.6-1.11l.98.02c1.02.02,1.88.42,2.56,1.2.68.78,1.01,2.11.98,3.99Z' />
              <path d='m22.13,222.19l-2.12-.43,1.3-6.65-17.88-3.58-1.3,6.65-2.12-.43,3.23-16.51,2.12.43-1.3,6.65,17.88,3.58,1.3-6.65,2.12.43-3.23,16.51Z' />
              <path d='m10.06,189.19l-.08.26,18.16,5.68-.86,2.83-21.55-6.75,1.35-4.43,20.86-3.18.08-.26-18.16-5.68.86-2.83,21.55,6.75-1.35,4.43-20.86,3.18Z' />
              <path d='m30.67,155.3l-6.56-2.88-.12.29,8.4,9.93-12.9.58-.12.29,6.55,2.88,10.38,4.55-1.18,2.75-20.7-9.08,1.65-3.86,11.02-.39.09-.21-7.25-8.4,1.59-3.72,20.7,9.08-1.18,2.75-10.38-4.55Z' />
              <path d='m50.53,142.26c-.81,1.44-1.74,2.55-2.78,3.33-1.04.77-2.18,1.25-3.43,1.43-1.24.18-2.58.07-4.01-.34-1.43-.41-2.95-1.08-4.56-2-1.59-.92-2.93-1.9-4.02-2.94-1.09-1.05-1.87-2.15-2.35-3.33-.48-1.17-.66-2.41-.53-3.72.13-1.3.59-2.68,1.41-4.12.81-1.44,1.74-2.55,2.78-3.33,1.04-.77,2.19-1.25,3.43-1.43,1.24-.18,2.58-.06,4.03.35,1.44.41,2.96,1.08,4.55,2,1.61.93,2.95,1.91,4.03,2.95,1.08,1.04,1.86,2.15,2.34,3.32.48,1.17.66,2.41.53,3.71-.13,1.3-.59,2.68-1.41,4.12Zm-2.05-1.18c.53-.95.83-1.84.89-2.67.06-.83-.07-1.63-.39-2.38-.32-.75-.82-1.45-1.51-2.11-.69-.65-1.53-1.26-2.52-1.83l-3.2-1.85c-.97-.56-1.92-.98-2.83-1.25-.91-.27-1.77-.36-2.57-.25-.8.11-1.54.4-2.22.87-.68.48-1.28,1.19-1.82,2.14-.53.95-.83,1.84-.89,2.67-.06.83.07,1.63.39,2.38.32.75.83,1.46,1.53,2.11.7.66,1.53,1.26,2.51,1.83l3.2,1.85c.99.57,1.94.99,2.84,1.26.9.27,1.76.35,2.56.24.8-.1,1.54-.39,2.22-.87.68-.48,1.28-1.19,1.82-2.14Z' />
              <path d='m40.85,113.78l5.33-7.49c1.35-1.9,2.84-3.07,4.46-3.52,1.62-.45,3.15-.15,4.58.9,1.1.8,1.74,1.76,1.91,2.86.17,1.1.03,2.25-.43,3.46l.08.06c1.13-1.06,2.32-1.75,3.56-2.06,1.24-.31,2.5,0,3.78.93.73.54,1.32,1.19,1.76,1.95.44.77.7,1.59.79,2.47.09.88.01,1.78-.24,2.71-.25.93-.67,1.81-1.27,2.65l-6.01,8.44-18.3-13.36Zm13.07-1.4c.8-1.12,1.21-2.14,1.25-3.07.04-.93-.36-1.7-1.2-2.32l-1.02-.75c-.84-.61-1.69-.76-2.56-.43-.87.33-1.7,1.05-2.5,2.16l-3.24,4.55,6.03,4.4,3.24-4.55Zm8.76,5.72c.87-1.22,1.33-2.35,1.37-3.37.04-1.03-.41-1.89-1.36-2.57l-1.07-.78c-.93-.68-1.87-.84-2.83-.48-.96.36-1.87,1.15-2.74,2.37l-3.56,4.99,6.63,4.84,3.56-4.99Z' />
              <path d='m73.63,107.51l-1.62-1.46,4.45-5.07-13.62-12.27-4.45,5.07-1.62-1.46,11.05-12.58,1.62,1.46-4.45,5.07,13.62,12.27,4.45-5.07,1.62,1.46-11.05,12.58Z' />
              <path d='m90.75,88.78l-15.28-16.81,2.38-2.22,13.68,15.05,9.37-8.73,1.6,1.76-11.75,10.95Z' />
              <path d='m108.34,72.97l-1.29-1.76,5.37-4.05-10.88-14.81-5.37,4.05-1.29-1.76,13.34-10.05,1.29,1.76-5.37,4.05,10.88,14.81,5.37-4.05,1.29,1.76-13.34,10.05Z' />
              <path d='m142.32,50.06l-5.22-4.45-8.12,4.84,1.31,6.78-2.89,1.72-4.35-23.92,3.68-2.19,18.54,15.46-2.95,1.76Zm-15.85-13.68l-.3.18,2.28,11.44,6.8-4.05-8.78-7.57Z' />
              <path d='m154.51,43.8l-2.95,1.35-9.29-20.82,8.91-4.07c2.27-1.04,4.23-1.3,5.9-.79,1.66.51,2.91,1.71,3.76,3.6.75,1.69.84,3.28.27,4.76-.58,1.48-1.81,2.76-3.7,3.81l10.26,6.15-3.3,1.51-9.93-6.16-3.89,1.78,3.96,8.89Zm.98-13.7c1.24-.57,2.09-1.27,2.54-2.11.45-.84.47-1.75.03-2.73l-.69-1.55c-.43-.97-1.11-1.57-2.04-1.78s-2.01-.03-3.25.53l-5.89,2.69,3.41,7.64,5.89-2.69Z' />
              <path d='m174.45,35.18l-.68-2.08,6.36-2.12-5.69-17.53-6.36,2.12-.68-2.08,15.79-5.25.68,2.08-6.36,2.12,5.69,17.53,6.36-2.12.68,2.08-15.79,5.25Z' />
              <path d='m213.85,24.35l-3.55-5.89-9.22,1.98-.89,6.85-3.27.7,3.38-24.08,4.18-.9,12.73,20.62-3.35.72Zm-10.74-18.07l-.34.07-1.43,11.58,7.72-1.66-5.95-10Z' />
              <path d='m256.93,14.57c-1.75.03-2.98-.28-3.71-.94-.73-.65-1.1-1.47-1.11-2.44v-.93c-.03-.97.31-1.8,1.02-2.48s1.93-1.03,3.68-1.06c1.74-.03,2.98.28,3.71.94.73.65,1.1,1.47,1.12,2.44v.93c.03.98-.31,1.8-1.02,2.48-.71.68-1.93,1.03-3.68,1.06Z' />
              <path d='m291.51,0l7.4,1.24c3.24.54,5.5,1.9,6.78,4.06,1.28,2.16,1.62,5.1,1.01,8.83-.61,3.72-1.87,6.4-3.77,8.02-1.91,1.63-4.48,2.17-7.72,1.62l-7.4-1.24,3.69-22.54Zm3.94,21.4c2.13.36,3.83,0,5.11-1.07,1.28-1.07,2.11-2.74,2.48-5.02l.57-3.49c.37-2.28.12-4.14-.75-5.57-.87-1.43-2.37-2.32-4.49-2.68l-4.06-.68-2.92,17.82,4.06.68Z' />
              <path d='m309.42,26.45l5.76-22.09,16,4.28-.6,2.31-12.87-3.44-1.94,7.44,12.43,3.32-.6,2.31-12.43-3.32-2.01,7.72,12.87,3.44-.6,2.31-16-4.28Z' />
              <path d='m337.89,35.53c-2.26-.84-3.99-1.89-5.17-3.14-1.19-1.25-2.05-2.61-2.59-4.06l2.76-.72c.61,1.41,1.37,2.58,2.28,3.49.91.92,2.12,1.66,3.64,2.22,1.83.68,3.36.84,4.58.49,1.22-.36,2.06-1.17,2.53-2.46.38-1.04.32-1.98-.17-2.82-.49-.84-1.56-1.7-3.2-2.59l-2.67-1.44c-1.16-.64-2.09-1.3-2.79-1.98-.7-.68-1.2-1.37-1.52-2.08-.32-.71-.47-1.42-.46-2.12,0-.71.14-1.4.38-2.07.71-1.97,2.01-3.18,3.89-3.62,1.88-.44,4.11-.19,6.69.77,2.02.75,3.62,1.67,4.8,2.77,1.17,1.1,1.99,2.32,2.46,3.69l-2.7.78c-.42-1.04-1.03-1.99-1.84-2.84-.81-.86-2-1.58-3.56-2.16-1.71-.63-3.13-.82-4.27-.54-1.14.27-1.93,1.02-2.37,2.24-.35.96-.29,1.86.18,2.72.47.86,1.55,1.75,3.23,2.67l2.57,1.4c1.16.64,2.1,1.3,2.81,1.98.71.68,1.23,1.38,1.56,2.08.33.7.49,1.42.48,2.13s-.15,1.42-.4,2.12c-.72,1.99-2.05,3.26-3.99,3.83-1.94.56-4.32.32-7.13-.73Z' />
              <path d='m364.75,46.89l.72-6.87-8.51-4.11-4.82,4.89-3.02-1.46,17.14-17.03,3.86,1.86-2.28,24.21-3.09-1.49Zm2.32-20.96l-.31-.15-8.09,8.31,7.12,3.44,1.28-11.6Z' />
              <path d='m373.96,52.01l-2.77-1.68,11.58-19.6,8.39,5.08c2.14,1.29,3.47,2.78,4.01,4.45.54,1.67.28,3.4-.77,5.18-.94,1.59-2.18,2.57-3.71,2.94s-3.27.07-5.21-.9l.87,12.04-3.1-1.88-.67-11.77-3.67-2.22-4.95,8.37Zm11.67-7c1.17.71,2.22,1.01,3.16.91s1.69-.61,2.23-1.53l.86-1.46c.54-.92.63-1.82.28-2.71-.36-.89-1.12-1.69-2.28-2.39l-5.55-3.36-4.25,7.19,5.55,3.36Z' />
              <path d='m392.46,63.87l-2.61-1.93,13.32-18.44,7.89,5.84c2.01,1.49,3.2,3.09,3.59,4.8s-.03,3.41-1.24,5.08c-1.08,1.5-2.4,2.36-3.96,2.58-1.56.22-3.26-.24-5.1-1.38l-.23,12.07-2.92-2.16.41-11.78-3.45-2.55-5.69,7.87Zm12.26-5.88c1.1.81,2.12,1.21,3.07,1.2.95-.01,1.73-.45,2.36-1.32l.99-1.37c.62-.86.8-1.75.52-2.67-.27-.92-.96-1.78-2.06-2.6l-5.22-3.86-4.88,6.76,5.22,3.86Z' />
              <path d='m413.49,81.25c-1.23-1.1-2.11-2.25-2.64-3.44-.53-1.19-.76-2.42-.68-3.69.08-1.27.47-2.57,1.16-3.9.69-1.34,1.65-2.7,2.88-4.11,1.21-1.39,2.44-2.51,3.67-3.37,1.23-.86,2.47-1.41,3.7-1.64,1.23-.23,2.47-.16,3.7.24,1.23.39,2.46,1.14,3.69,2.24,1.23,1.1,2.11,2.25,2.64,3.44.53,1.19.76,2.42.68,3.69-.08,1.27-.47,2.57-1.17,3.92-.7,1.34-1.65,2.71-2.86,4.1-1.23,1.4-2.46,2.53-3.68,3.39-1.23.85-2.46,1.4-3.69,1.63-1.23.23-2.47.16-3.7-.24-1.23-.39-2.46-1.14-3.69-2.24Zm1.57-1.79c.81.72,1.61,1.2,2.4,1.43.79.23,1.59.26,2.38.1.79-.16,1.58-.52,2.35-1.07.77-.55,1.53-1.25,2.29-2.12l2.44-2.79c.74-.85,1.34-1.7,1.79-2.55.45-.85.71-1.68.77-2.5.06-.82-.07-1.61-.39-2.38-.32-.77-.88-1.52-1.69-2.24s-1.61-1.2-2.4-1.43-1.59-.26-2.38-.1c-.79.16-1.58.52-2.36,1.08-.78.56-1.54,1.26-2.28,2.11l-2.44,2.79c-.76.87-1.36,1.72-1.8,2.56-.44.84-.7,1.67-.76,2.49-.06.82.06,1.61.39,2.38.32.77.88,1.52,1.69,2.24Z' />
              <path d='m424.5,91.06l16.43-15.66,2.22,2.38-14.71,14.02,8.73,9.39-1.72,1.64-10.95-11.77Z' />
              <path d='m438.68,106.78l17.72-14.13,2,2.57-15.87,12.66,7.88,10.13-1.85,1.48-9.88-12.7Z' />
              <path d='m459.95,137l4.18-5.46-5.1-8.03-6.64,1.59-1.81-2.85,23.43-5.34,2.31,3.64-14.52,19.37-1.85-2.92Zm12.87-16.58l-.19-.3-11.2,2.75,4.27,6.72,7.12-9.18Z' />
              <path d='m483.73,132.95l3.45,6.75c1.51,2.95,1.79,5.6.85,7.93-.94,2.34-3.07,4.37-6.38,6.11-3.31,1.74-6.18,2.32-8.61,1.75-2.43-.57-4.39-2.33-5.9-5.28l-3.45-6.75,20.04-10.5Zm-14.56,16.01c.99,1.94,2.29,3.11,3.9,3.5,1.61.4,3.43.07,5.46-1l3.1-1.62c2.03-1.06,3.35-2.38,3.96-3.94.61-1.56.42-3.31-.57-5.25l-1.89-3.7-15.85,8.3,1.89,3.7Z' />
              <path d='m476.31,171.34c-.61-1.54-.89-2.97-.85-4.28.05-1.31.39-2.51,1.02-3.61.63-1.1,1.55-2.09,2.76-2.97,1.2-.88,2.67-1.67,4.39-2.37,1.7-.69,3.29-1.14,4.77-1.36,1.48-.21,2.83-.14,4.04.2,1.21.35,2.28.98,3.21,1.89.93.91,1.7,2.13,2.31,3.68.61,1.54.89,2.97.85,4.28-.05,1.31-.39,2.51-1.02,3.61-.63,1.1-1.56,2.09-2.77,2.98-1.22.89-2.67,1.68-4.37,2.37-1.72.7-3.32,1.15-4.79,1.36-1.47.21-2.81.14-4.02-.21-1.21-.35-2.28-.98-3.21-1.89-.93-.91-1.7-2.13-2.31-3.68Zm2.19-.89c.4,1.01.91,1.8,1.51,2.36.61.56,1.3.95,2.08,1.17.78.21,1.64.25,2.57.11.93-.14,1.93-.43,2.99-.86l3.42-1.39c1.04-.42,1.95-.91,2.73-1.47.78-.55,1.38-1.18,1.79-1.89.42-.7.65-1.47.7-2.3s-.12-1.76-.52-2.77c-.4-1.01-.91-1.8-1.51-2.36-.61-.56-1.3-.95-2.08-1.17-.78-.21-1.64-.25-2.58-.1-.94.15-1.93.43-2.97.85l-3.42,1.39c-1.06.43-1.97.92-2.74,1.47-.77.55-1.36,1.18-1.78,1.88-.42.7-.65,1.47-.71,2.3-.05.83.12,1.76.52,2.77Z' />
              <path d='m482.6,187.7l-.92-3.14,21.63-6.49,2.78,9.49c.71,2.42.7,4.42-.02,6.02-.72,1.6-2.07,2.69-4.03,3.28-1.76.53-3.32.4-4.7-.38-1.37-.78-2.45-2.19-3.23-4.23l-7.41,9.46-1.03-3.51,7.37-9.12-1.21-4.15-9.23,2.77Zm13.27,2.84c.39,1.32.96,2.26,1.72,2.84.76.57,1.65.7,2.66.4l1.61-.48c1.01-.3,1.68-.91,2.02-1.8.33-.9.31-2.01-.08-3.33l-1.84-6.28-7.93,2.38,1.84,6.27Z' />
              <path d='m490.76,222.01l5.89-3.49-1.78-9.37-6.75-1.02-.63-3.33,23.71,3.86.81,4.25-20.59,12.51-.65-3.4Zm18.04-10.54l-.07-.34-11.41-1.66,1.49,7.84,9.98-5.84Z' />
              <path d='m500.34,258.83c.03-1.88.4-3.19,1.11-3.95.71-.76,1.57-1.13,2.6-1.11l.98.02c1.02.02,1.88.42,2.56,1.2.69.78,1.01,2.11.98,3.99-.03,1.88-.4,3.19-1.11,3.95-.71.76-1.57,1.13-2.6,1.11l-.98-.02c-1.02-.02-1.88-.42-2.56-1.2-.68-.78-1.01-2.11-.98-3.99Z' />
            </g>
          </g>
        </g>
      </svg>
    )
  },
  Logomark: (props: CustomIconProps) => {
    const isPrimary = props.color !== 'secondary'
    const bgStyle = isPrimary ? 'fill-primary' : 'fill-white'
    const textStyle = isPrimary ? 'fill-secondary' : 'fill-white'

    return (
      <svg
        width={512}
        height={512}
        viewBox='0 0 512 512'
        {...props}
      >
        <g>
          <circle className={bgStyle} cx='256' cy='256' r='256' />
          <path className={textStyle} d='m328.86,367.54l32.65,39.86h17.74l-95.41-117.96h-18.7l43.17,53.94h-56.03c-6.73,0-12.18-5.45-12.18-12.18v-46.8h41.62c26.92,0,47.27-6.22,61.04-18.65,13.76-12.43,20.65-29.17,20.65-50.22s-6.89-37.72-20.65-50.04c-13.77-12.31-34.12-18.47-61.04-18.47h-41.62v-13.89c0-9.81,7.95-17.75,17.75-17.75h69.27v-10.79h-190.6v10.79h69.27c9.81,0,17.75,7.95,17.75,17.75v13.89h-91.34v12.23h21.63c9.11,0,16.49,7.38,16.49,16.49v167.63h-33.09v10.79h33.09v20.68c0,6.45-5.23,11.68-11.68,11.68h-26.44v10.79h92.78v-10.79h-26.44c-6.45,0-11.68-5.23-11.68-11.68v-20.68h114.41c10.75,0,20.91,4.92,27.57,13.36Zm-47.09-208.27c10.9,0,20.37,1.32,28.39,3.94,8.02,2.63,14.69,6.16,19.99,10.58,5.3,4.43,9.24,9.62,11.81,15.59,2.57,5.98,3.86,12.19,3.86,18.64v15.77c0,6.69-1.29,13.03-3.86,19-2.58,5.98-6.52,11.17-11.81,15.59-5.3,4.43-11.97,7.95-19.99,10.58-8.03,2.63-17.49,3.94-28.39,3.94h-41.67v-113.64h41.67Zm-78.4,0h20.91v113.64h-37.4v-97.15c0-9.11,7.38-16.49,16.49-16.49Zm5.61,125.15h15.29v47.52c0,6.73-5.45,12.18-12.18,12.18h-25.22v-37.59c0-12.21,9.9-22.11,22.11-22.11Zm128.27-153.51l3.82-26.2,3.35,1.76-2.08,13.01-1.57,9.84.19.1,7.22-6.87,9.54-9.09,3.24,1.7-19.42,18-4.3-2.26Zm14.35,8.26l1.61-1.77,5.48,4.98,13.57-14.93-5.48-4.98,1.61-1.77,13.61,12.37-1.61,1.77-5.48-4.98-13.57,14.93,5.48,4.98-1.61,1.77-13.61-12.37Zm16.21,15.38l1.99-1.33,4.13,6.15,16.75-11.24-4.13-6.15,1.99-1.33,10.25,15.28-1.99,1.33-4.13-6.15-16.75,11.24,4.13,6.15-1.99,1.33-10.25-15.28Zm12.03,18.79l2.25-.81,2.52,6.97,18.97-6.86-2.52-6.97,2.25-.81,6.25,17.3-2.25.81-2.52-6.97-18.97,6.86,2.52,6.97-2.25.81-6.25-17.3Z' />
        </g>
      </svg>
    )
  }
}