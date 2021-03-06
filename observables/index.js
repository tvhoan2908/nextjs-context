import { BehaviorSubject, Subject } from 'rxjs';

const subject = new BehaviorSubject(null);

export const obsService = {
    updateUser: user => subject.next(user),
    clearUser: () => subject.next(null),
    getUser: () => subject.asObservable()
}