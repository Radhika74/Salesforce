import CurdCompo from 'c/curdCompo';

describe('c-curd-compo', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        const element = createElement('c-curd-compo', {
            is: CurdCompo
        });
        document.body.appendChild(element);
        expect(1).toBe(1);
    });
});