'use client';

import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { functionObject } from './new_object/object_function';
import { cycle } from './new_object/cycle';
import { web_worker } from './new_object/web-worker/web-worker';
import { array_buffer } from './new_object/array-buffer';
import { clipboard_read_anything, clipboard_read_text, clipboard_write_anything, clipboard_write_text } from './new_object/clipboard';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <button onClick={functionObject}>
          Object()
        </button>
        <button onClick={cycle}>
          并发模型与事件循环
        </button>
        <button onClick={web_worker}>
          web worker
        </button>
        <button onClick={array_buffer}>
          JavaScript 类型化数组
        </button>
        <button onClick={clipboard_read_anything}>
          Clipboard read anything
        </button>
        <button onClick={clipboard_read_text}>
          Clipboard read text
        </button>
        <button onClick={clipboard_write_anything}>
          Clipboard write anything
        </button>
        <button onClick={clipboard_write_text}>
          Clipboard write text
        </button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </div>
    </main>
  )
}
