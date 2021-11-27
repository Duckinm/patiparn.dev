export default function Index() {
  return (
    <div className="w-full max-h-screen bg-yellow-600">
      <div className="container h-screen mx-auto">
        <div className="flex flex-col items-center justify-center h-full gap-4">
          <div className="max-w-md card bordered">
            <figure>
              <img src="https://picsum.photos/id/1005/400/250" />
            </figure>
            <div className="card-body">
              <h1 className="card-title">
                Patiparn Intaraprasert
                <div className="mx-2 badge badge-secondary">Software Engineer</div>
              </h1>
              <p>
                This project is in-progress, because a lot of work to do so, <span>please stay tune.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
