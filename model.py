class Class:

    def __init__(self, groups, teacher, subject,  duration, classrooms):
        self.groups = groups
        self.teacher = teacher
        self.subject = subject
        # self.type = type
        self.duration = duration
        self.classrooms = classrooms

    def __str__(self):
        return "Groups {} | Teacher '{}' | Subject '{}' | {} hours | Classrooms {} \n"\
            .format(self.groups, self.teacher, self.subject,  self.duration, self.classrooms)

    def __repr__(self):
        return str(self)


class Classroom:

    def __init__(self, name):
        self.name = name
        # self.type = type

    def __str__(self):
        return "{} \n".format(self.name)

    def __repr__(self):
        return str(self)


class Data:

    def __init__(self, groups, teachers, classes, classrooms):
        self.groups = groups
        self.teachers = teachers
        self.classes = classes
        self.classrooms = classrooms
