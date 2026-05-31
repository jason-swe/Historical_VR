import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="mx-auto grid min-h-[70svh] max-w-3xl place-items-center px-4 py-20 text-center">
      <div>
        <p className="text-sm font-bold uppercase tracking-widest text-red-900">
          Không tìm thấy trang
        </p>
        <h1 className="mt-4 text-4xl font-black text-zinc-950">
          Tuyến tham quan này chưa tồn tại
        </h1>
        <p className="mt-4 leading-7 text-zinc-600">
          Hãy quay lại bản đồ để chọn một địa điểm lịch sử trong hành trình.
        </p>
        <Link
          to="/map"
          className="mt-8 inline-flex rounded-md bg-red-900 px-6 py-3 text-sm font-black uppercase tracking-wider text-white transition hover:bg-red-800"
        >
          Mở bản đồ
        </Link>
      </div>
    </section>
  )
}

export default NotFound
