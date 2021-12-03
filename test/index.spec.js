import { expect } from 'chai';
import app from '../lib';

describe('[app]', () => {
    it('is a function', () => {
        expect(app).to.be.a('function');
    });
});
