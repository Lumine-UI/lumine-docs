export default function ErrorPage() {
    return (
        <div>
            <h1 className="text-5xl text-primary dark:text-primary-dark font-bold my-6 leading-tight">
                Not Found
            </h1>
            <p className="text-primary dark:text-primary-dark">
                This page doesn’t exist.
            </p>
            <p className="text-primary dark:text-primary-dark">
                Quite possibly, it hasn’t been written yet. This alpha is a work in progress!
            </p>
            <p className="text-primary dark:text-primary-dark">
                Please check back later.
            </p>
        </div>
    );
}