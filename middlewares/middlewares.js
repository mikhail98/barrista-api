export function contentType(req, res, next) {
    res.set('Content-Type', 'application/json')

    next()
}