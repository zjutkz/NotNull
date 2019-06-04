"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const required = function (target, propertyKey, parameterIndex) {
    if (!target[propertyKey]["required"]) {
        target[propertyKey]["required"] = {};
    }
    target[propertyKey]["required"][parameterIndex] = true;
};
exports.required = required;
const notNull = function (target, propertyKey, descriptor) {
    let originMethod = descriptor.value;
    descriptor.value = function (...params) {
        let args = arguments;
        if (originMethod["required"]) {
            Object.keys(originMethod["required"]).forEach(parameterIndex => {
                if (!args[parameterIndex])
                    throw Error(`arguments #${parameterIndex} of method ${propertyKey} is null, which require a not null value!`);
            });
        }
        return originMethod.apply(this, params);
    };
};
exports.notNull = notNull;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sUUFBUSxHQUFHLFVBQVUsTUFBTSxFQUFFLFdBQW1CLEVBQUUsY0FBc0I7SUFDMUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUNsQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFBO0tBQ3ZDO0lBQ0QsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxHQUFHLElBQUksQ0FBQTtBQUMxRCxDQUFDLENBQUM7QUFlTSw0QkFBUTtBQWJoQixNQUFNLE9BQU8sR0FBRyxVQUFVLE1BQU0sRUFBRSxXQUFtQixFQUFFLFVBQThCO0lBQ2pGLElBQUksWUFBWSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFDcEMsVUFBVSxDQUFDLEtBQUssR0FBRyxVQUFVLEdBQUksTUFBTTtRQUNuQyxJQUFJLElBQUksR0FBRyxTQUFTLENBQUM7UUFDckIsSUFBRyxZQUFZLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEVBQUU7Z0JBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO29CQUFFLE1BQU0sS0FBSyxDQUFDLGNBQWMsY0FBYyxjQUFjLFdBQVcsMkNBQTJDLENBQUMsQ0FBQztZQUM3SSxDQUFDLENBQUMsQ0FBQztTQUNOO1FBQ0QsT0FBTyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUMzQyxDQUFDLENBQUE7QUFDTCxDQUFDLENBQUM7QUFFZ0IsMEJBQU8ifQ==