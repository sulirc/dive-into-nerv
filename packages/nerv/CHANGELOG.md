# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="0.4.0-beta.f0ef1ef6"></a>
# [0.4.0-beta.f0ef1ef6](https://github.com/NervJS/nerv/compare/0.2.8...0.4.0-beta.f0ef1ef6) (2017-12-04)


### Bug Fixes

*  wrong boolen for IS_NON_DIMENSIONAL ([087918c](https://github.com/NervJS/nerv/commit/087918c))
* `unmountComponentAtNode` don't export as default ([e680b8e](https://github.com/NervJS/nerv/commit/e680b8e))
* attach ref failed ([99b3c41](https://github.com/NervJS/nerv/commit/99b3c41))
* child context lost during createElement ([6ebed2c](https://github.com/NervJS/nerv/commit/6ebed2c))
* component can't catch ([0d685f8](https://github.com/NervJS/nerv/commit/0d685f8))
* componentDidCatch can't catch component that wraped by vnode ([8b6e71a](https://github.com/NervJS/nerv/commit/8b6e71a))
* diff break down when nothing returns or throw error in render() function. ([64e3b2f](https://github.com/NervJS/nerv/commit/64e3b2f))
* diff failed when lastVnode is invalid ([6d622b0](https://github.com/NervJS/nerv/commit/6d622b0))
* error in hoc ([68ec3fc](https://github.com/NervJS/nerv/commit/68ec3fc))
* ignore function prop ([749b01e](https://github.com/NervJS/nerv/commit/749b01e))
* patch can't get proper lastDom ([200ebf9](https://github.com/NervJS/nerv/commit/200ebf9))
* patch failed when  next vnode length > last vnode length ([df17b50](https://github.com/NervJS/nerv/commit/df17b50))
* patchProps don't remove event listener ([f907f11](https://github.com/NervJS/nerv/commit/f907f11))
* server rendering style ([f2bfd1b](https://github.com/NervJS/nerv/commit/f2bfd1b))
* set element style.float cross browser ([ca1aaa0](https://github.com/NervJS/nerv/commit/ca1aaa0))
* set input property failed ([9f1d863](https://github.com/NervJS/nerv/commit/9f1d863))
* stateless component can't detach ref ([b7f018a](https://github.com/NervJS/nerv/commit/b7f018a))
* string refs support ([d8f4c56](https://github.com/NervJS/nerv/commit/d8f4c56))
* undefined vnode can't be removed from the document ([4992359](https://github.com/NervJS/nerv/commit/4992359))
* unmount  does not return new dom ([c36957d](https://github.com/NervJS/nerv/commit/c36957d))
* unmount can't unhook event ([62a26be](https://github.com/NervJS/nerv/commit/62a26be))
* unmount children don't remove child ([ddc8832](https://github.com/NervJS/nerv/commit/ddc8832))
* unmountComponentAtNode failed in stateless component ([88a054e](https://github.com/NervJS/nerv/commit/88a054e))
* use a lineweight svg solution ([fe23362](https://github.com/NervJS/nerv/commit/fe23362))


### Features

* Children export as top-level API ([f780dd9](https://github.com/NervJS/nerv/commit/f780dd9))
* componentDidCatch basic logic and test ([69d7378](https://github.com/NervJS/nerv/commit/69d7378))
* componentDidCatch can catch every lifecycle ([6b7ff51](https://github.com/NervJS/nerv/commit/6b7ff51))
* componentDidCatch can passthrough child ([931ff20](https://github.com/NervJS/nerv/commit/931ff20))
* createPortal should work ([b8d45aa](https://github.com/NervJS/nerv/commit/b8d45aa))
* hooks use enum to identify ([628e1e9](https://github.com/NervJS/nerv/commit/628e1e9))
* new top-level API, `isValidElement` ([6d91881](https://github.com/NervJS/nerv/commit/6d91881))
* refs support string ([662d4db](https://github.com/NervJS/nerv/commit/662d4db))
* remove unnessceily hook type check ([07c7d04](https://github.com/NervJS/nerv/commit/07c7d04))


### Performance Improvements

* don't diff in simple situation ([77f21f9](https://github.com/NervJS/nerv/commit/77f21f9))
* lazy init children ([70f3e56](https://github.com/NervJS/nerv/commit/70f3e56))
* nextTick use Promise.then ->  requestAnimationFrame -> setTimeout ([dacc145](https://github.com/NervJS/nerv/commit/dacc145))
* remove inaccessible branch ([220ce29](https://github.com/NervJS/nerv/commit/220ce29))
* remove unnecessary prop's setup ([8f98212](https://github.com/NervJS/nerv/commit/8f98212))
* use a empty obj for context ([ddba0ab](https://github.com/NervJS/nerv/commit/ddba0ab))
* use c-style for loop instead of forEach ([3415fe8](https://github.com/NervJS/nerv/commit/3415fe8))
* use internal isArray function ([d65488e](https://github.com/NervJS/nerv/commit/d65488e))
* use object-literal to create VNode and VText ([3412be7](https://github.com/NervJS/nerv/commit/3412be7))



<a name="0.3.0"></a>
# [0.3.0](https://github.com/NervJS/nerv/compare/v0.2.0-alpha.1...v0.3.0) (2017-10-28)


### Bug Fixes

* unmountComponentAtNode can't unmount vnode and stateless properly ([e08cb13](https://github.com/NervJS/nerv/commit/e08cb13))


### Features

* export a empty function from nerv-shared ([1f51b2b](https://github.com/NervJS/nerv/commit/1f51b2b))


### Performance Improvements

* explicit equal null  for parentNode ([463a9ca](https://github.com/NervJS/nerv/commit/463a9ca))
* remove unnecessary widget type check ([9813c81](https://github.com/NervJS/nerv/commit/9813c81))



<a name="0.2.0-alpha.1"></a>
# [0.2.0-alpha.1](https://github.com/NervJS/nerv/compare/0.2.1...v0.2.0-alpha.1) (2017-10-28)




<a name="0.4.0-beta.f869cca6"></a>
# [0.4.0-beta.f869cca6](https://github.com/NervJS/nerv/compare/v0.3.0...v0.4.0-beta.f869cca6) (2017-12-04)


### Bug Fixes

*  wrong boolen for IS_NON_DIMENSIONAL ([087918c](https://github.com/NervJS/nerv/commit/087918c))
* `unmountComponentAtNode` don't export as default ([e680b8e](https://github.com/NervJS/nerv/commit/e680b8e))
* attach ref failed ([99b3c41](https://github.com/NervJS/nerv/commit/99b3c41))
* child context lost during createElement ([6ebed2c](https://github.com/NervJS/nerv/commit/6ebed2c))
* component can't catch ([0d685f8](https://github.com/NervJS/nerv/commit/0d685f8))
* componentDidCatch can't catch component that wraped by vnode ([8b6e71a](https://github.com/NervJS/nerv/commit/8b6e71a))
* diff break down when nothing returns or throw error in render() function. ([64e3b2f](https://github.com/NervJS/nerv/commit/64e3b2f))
* diff failed when lastVnode is invalid ([6d622b0](https://github.com/NervJS/nerv/commit/6d622b0))
* error in hoc ([68ec3fc](https://github.com/NervJS/nerv/commit/68ec3fc))
* ignore function prop ([749b01e](https://github.com/NervJS/nerv/commit/749b01e))
* patch can't get proper lastDom ([200ebf9](https://github.com/NervJS/nerv/commit/200ebf9))
* patch failed when  next vnode length > last vnode length ([df17b50](https://github.com/NervJS/nerv/commit/df17b50))
* patchProps don't remove event listener ([f907f11](https://github.com/NervJS/nerv/commit/f907f11))
* server rendering style ([f2bfd1b](https://github.com/NervJS/nerv/commit/f2bfd1b))
* set element style.float cross browser ([ca1aaa0](https://github.com/NervJS/nerv/commit/ca1aaa0))
* set input property failed ([9f1d863](https://github.com/NervJS/nerv/commit/9f1d863))
* stateless component can't detach ref ([b7f018a](https://github.com/NervJS/nerv/commit/b7f018a))
* string refs support ([d8f4c56](https://github.com/NervJS/nerv/commit/d8f4c56))
* undefined vnode can't be removed from the document ([4992359](https://github.com/NervJS/nerv/commit/4992359))
* unmount  does not return new dom ([c36957d](https://github.com/NervJS/nerv/commit/c36957d))
* unmount can't unhook event ([62a26be](https://github.com/NervJS/nerv/commit/62a26be))
* unmount children don't remove child ([ddc8832](https://github.com/NervJS/nerv/commit/ddc8832))
* unmountComponentAtNode failed in stateless component ([88a054e](https://github.com/NervJS/nerv/commit/88a054e))
* use a lineweight svg solution ([fe23362](https://github.com/NervJS/nerv/commit/fe23362))


### Features

* componentDidCatch basic logic and test ([69d7378](https://github.com/NervJS/nerv/commit/69d7378))
* componentDidCatch can catch every lifecycle ([6b7ff51](https://github.com/NervJS/nerv/commit/6b7ff51))
* componentDidCatch can passthrough child ([931ff20](https://github.com/NervJS/nerv/commit/931ff20))
* createPortal should work ([b8d45aa](https://github.com/NervJS/nerv/commit/b8d45aa))
* hooks use enum to identify ([628e1e9](https://github.com/NervJS/nerv/commit/628e1e9))
* new top-level API, `isValidElement` ([6d91881](https://github.com/NervJS/nerv/commit/6d91881))
* refs support string ([662d4db](https://github.com/NervJS/nerv/commit/662d4db))
* remove unnessceily hook type check ([07c7d04](https://github.com/NervJS/nerv/commit/07c7d04))


### Performance Improvements

* don't diff in simple situation ([77f21f9](https://github.com/NervJS/nerv/commit/77f21f9))
* lazy init children ([70f3e56](https://github.com/NervJS/nerv/commit/70f3e56))
* nextTick use Promise.then ->  requestAnimationFrame -> setTimeout ([dacc145](https://github.com/NervJS/nerv/commit/dacc145))
* remove inaccessible branch ([220ce29](https://github.com/NervJS/nerv/commit/220ce29))
* remove unnecessary prop's setup ([8f98212](https://github.com/NervJS/nerv/commit/8f98212))
* use a empty obj for context ([ddba0ab](https://github.com/NervJS/nerv/commit/ddba0ab))
* use c-style for loop instead of forEach ([3415fe8](https://github.com/NervJS/nerv/commit/3415fe8))
* use internal isArray function ([d65488e](https://github.com/NervJS/nerv/commit/d65488e))
* use object-literal to create VNode and VText ([3412be7](https://github.com/NervJS/nerv/commit/3412be7))




<a name="0.4.0-beta.4b0270d1"></a>
# [0.4.0-beta.4b0270d1](https://github.com/NervJS/nerv/compare/v0.3.0...v0.4.0-beta.4b0270d1) (2017-12-04)


### Bug Fixes

*  wrong boolen for IS_NON_DIMENSIONAL ([087918c](https://github.com/NervJS/nerv/commit/087918c))
* `unmountComponentAtNode` don't export as default ([e680b8e](https://github.com/NervJS/nerv/commit/e680b8e))
* attach ref failed ([99b3c41](https://github.com/NervJS/nerv/commit/99b3c41))
* child context lost during createElement ([6ebed2c](https://github.com/NervJS/nerv/commit/6ebed2c))
* component can't catch ([0d685f8](https://github.com/NervJS/nerv/commit/0d685f8))
* componentDidCatch can't catch component that wraped by vnode ([8b6e71a](https://github.com/NervJS/nerv/commit/8b6e71a))
* diff break down when nothing returns or throw error in render() function. ([64e3b2f](https://github.com/NervJS/nerv/commit/64e3b2f))
* diff failed when lastVnode is invalid ([6d622b0](https://github.com/NervJS/nerv/commit/6d622b0))
* error in hoc ([68ec3fc](https://github.com/NervJS/nerv/commit/68ec3fc))
* ignore function prop ([749b01e](https://github.com/NervJS/nerv/commit/749b01e))
* patch can't get proper lastDom ([200ebf9](https://github.com/NervJS/nerv/commit/200ebf9))
* patch failed when  next vnode length > last vnode length ([df17b50](https://github.com/NervJS/nerv/commit/df17b50))
* patchProps don't remove event listener ([f907f11](https://github.com/NervJS/nerv/commit/f907f11))
* server rendering style ([f2bfd1b](https://github.com/NervJS/nerv/commit/f2bfd1b))
* set element style.float cross browser ([ca1aaa0](https://github.com/NervJS/nerv/commit/ca1aaa0))
* set input property failed ([9f1d863](https://github.com/NervJS/nerv/commit/9f1d863))
* stateless component can't detach ref ([b7f018a](https://github.com/NervJS/nerv/commit/b7f018a))
* string refs support ([d8f4c56](https://github.com/NervJS/nerv/commit/d8f4c56))
* undefined vnode can't be removed from the document ([4992359](https://github.com/NervJS/nerv/commit/4992359))
* unmount  does not return new dom ([c36957d](https://github.com/NervJS/nerv/commit/c36957d))
* unmount can't unhook event ([62a26be](https://github.com/NervJS/nerv/commit/62a26be))
* unmount children don't remove child ([ddc8832](https://github.com/NervJS/nerv/commit/ddc8832))
* unmountComponentAtNode failed in stateless component ([88a054e](https://github.com/NervJS/nerv/commit/88a054e))
* use a lineweight svg solution ([fe23362](https://github.com/NervJS/nerv/commit/fe23362))


### Features

* componentDidCatch basic logic and test ([69d7378](https://github.com/NervJS/nerv/commit/69d7378))
* componentDidCatch can catch every lifecycle ([6b7ff51](https://github.com/NervJS/nerv/commit/6b7ff51))
* componentDidCatch can passthrough child ([931ff20](https://github.com/NervJS/nerv/commit/931ff20))
* createPortal should work ([b8d45aa](https://github.com/NervJS/nerv/commit/b8d45aa))
* hooks use enum to identify ([628e1e9](https://github.com/NervJS/nerv/commit/628e1e9))
* new top-level API, `isValidElement` ([6d91881](https://github.com/NervJS/nerv/commit/6d91881))
* refs support string ([662d4db](https://github.com/NervJS/nerv/commit/662d4db))
* remove unnessceily hook type check ([07c7d04](https://github.com/NervJS/nerv/commit/07c7d04))


### Performance Improvements

* don't diff in simple situation ([77f21f9](https://github.com/NervJS/nerv/commit/77f21f9))
* lazy init children ([70f3e56](https://github.com/NervJS/nerv/commit/70f3e56))
* nextTick use Promise.then ->  requestAnimationFrame -> setTimeout ([dacc145](https://github.com/NervJS/nerv/commit/dacc145))
* remove inaccessible branch ([220ce29](https://github.com/NervJS/nerv/commit/220ce29))
* remove unnecessary prop's setup ([8f98212](https://github.com/NervJS/nerv/commit/8f98212))
* use a empty obj for context ([ddba0ab](https://github.com/NervJS/nerv/commit/ddba0ab))
* use c-style for loop instead of forEach ([3415fe8](https://github.com/NervJS/nerv/commit/3415fe8))
* use internal isArray function ([d65488e](https://github.com/NervJS/nerv/commit/d65488e))
* use object-literal to create VNode and VText ([3412be7](https://github.com/NervJS/nerv/commit/3412be7))




<a name="0.4.0-beta.4a1e5c20"></a>
# [0.4.0-beta.4a1e5c20](https://github.com/NervJS/nerv/compare/v0.3.0...v0.4.0-beta.4a1e5c20) (2017-12-01)


### Bug Fixes

*  wrong boolen for IS_NON_DIMENSIONAL ([087918c](https://github.com/NervJS/nerv/commit/087918c))
* `unmountComponentAtNode` don't export as default ([e680b8e](https://github.com/NervJS/nerv/commit/e680b8e))
* attach ref failed ([99b3c41](https://github.com/NervJS/nerv/commit/99b3c41))
* child context lost during createElement ([6ebed2c](https://github.com/NervJS/nerv/commit/6ebed2c))
* component can't catch ([0d685f8](https://github.com/NervJS/nerv/commit/0d685f8))
* componentDidCatch can't catch component that wraped by vnode ([8b6e71a](https://github.com/NervJS/nerv/commit/8b6e71a))
* diff break down when nothing returns or throw error in render() function. ([64e3b2f](https://github.com/NervJS/nerv/commit/64e3b2f))
* diff failed when lastVnode is invalid ([6d622b0](https://github.com/NervJS/nerv/commit/6d622b0))
* error in hoc ([68ec3fc](https://github.com/NervJS/nerv/commit/68ec3fc))
* ignore function prop ([749b01e](https://github.com/NervJS/nerv/commit/749b01e))
* patch can't get proper lastDom ([200ebf9](https://github.com/NervJS/nerv/commit/200ebf9))
* patch failed when  next vnode length > last vnode length ([df17b50](https://github.com/NervJS/nerv/commit/df17b50))
* patchProps don't remove event listener ([f907f11](https://github.com/NervJS/nerv/commit/f907f11))
* server rendering style ([f2bfd1b](https://github.com/NervJS/nerv/commit/f2bfd1b))
* set element style.float cross browser ([ca1aaa0](https://github.com/NervJS/nerv/commit/ca1aaa0))
* set input property failed ([9f1d863](https://github.com/NervJS/nerv/commit/9f1d863))
* stateless component can't detach ref ([b7f018a](https://github.com/NervJS/nerv/commit/b7f018a))
* string refs support ([d8f4c56](https://github.com/NervJS/nerv/commit/d8f4c56))
* undefined vnode can't be removed from the document ([4992359](https://github.com/NervJS/nerv/commit/4992359))
* unmount  does not return new dom ([c36957d](https://github.com/NervJS/nerv/commit/c36957d))
* unmount can't unhook event ([62a26be](https://github.com/NervJS/nerv/commit/62a26be))
* unmount children don't remove child ([ddc8832](https://github.com/NervJS/nerv/commit/ddc8832))
* unmountComponentAtNode failed in stateless component ([88a054e](https://github.com/NervJS/nerv/commit/88a054e))
* use a lineweight svg solution ([fe23362](https://github.com/NervJS/nerv/commit/fe23362))


### Features

* componentDidCatch basic logic and test ([69d7378](https://github.com/NervJS/nerv/commit/69d7378))
* componentDidCatch can catch every lifecycle ([6b7ff51](https://github.com/NervJS/nerv/commit/6b7ff51))
* componentDidCatch can passthrough child ([931ff20](https://github.com/NervJS/nerv/commit/931ff20))
* createPortal should work ([b8d45aa](https://github.com/NervJS/nerv/commit/b8d45aa))
* hooks use enum to identify ([628e1e9](https://github.com/NervJS/nerv/commit/628e1e9))
* new top-level API, `isValidElement` ([6d91881](https://github.com/NervJS/nerv/commit/6d91881))
* refs support string ([662d4db](https://github.com/NervJS/nerv/commit/662d4db))
* remove unnessceily hook type check ([07c7d04](https://github.com/NervJS/nerv/commit/07c7d04))


### Performance Improvements

* don't diff in simple situation ([77f21f9](https://github.com/NervJS/nerv/commit/77f21f9))
* lazy init children ([70f3e56](https://github.com/NervJS/nerv/commit/70f3e56))
* nextTick use Promise.then ->  requestAnimationFrame -> setTimeout ([dacc145](https://github.com/NervJS/nerv/commit/dacc145))
* remove inaccessible branch ([220ce29](https://github.com/NervJS/nerv/commit/220ce29))
* remove unnecessary prop's setup ([8f98212](https://github.com/NervJS/nerv/commit/8f98212))
* use a empty obj for context ([ddba0ab](https://github.com/NervJS/nerv/commit/ddba0ab))
* use c-style for loop instead of forEach ([3415fe8](https://github.com/NervJS/nerv/commit/3415fe8))
* use internal isArray function ([d65488e](https://github.com/NervJS/nerv/commit/d65488e))
* use object-literal to create VNode and VText ([3412be7](https://github.com/NervJS/nerv/commit/3412be7))




<a name="0.3.0"></a>
# [0.3.0](https://github.com/NervJS/nerv/compare/v0.2.0-alpha.1...v0.3.0) (2017-10-28)


### Bug Fixes

* unmountComponentAtNode can't unmount vnode and stateless properly ([e08cb13](https://github.com/NervJS/nerv/commit/e08cb13))


### Features

* export a empty function from nerv-shared ([1f51b2b](https://github.com/NervJS/nerv/commit/1f51b2b))


### Performance Improvements

* explicit equal null  for parentNode ([463a9ca](https://github.com/NervJS/nerv/commit/463a9ca))
* remove unnecessary widget type check ([9813c81](https://github.com/NervJS/nerv/commit/9813c81))